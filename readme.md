# Labaratory


Приложение разбито на микросервисы, но на текущий момент хранится в монорепе(./packages). Для каждого из них написан Dockerfile:
```
1. Front(./packages/front) nextjs
2. Strapi(./packages/strapi) Админка
3. Python-api(./packages/python-api) fastapi
4. nginx(./packages/nginx) ingress
```


Для того, чтобы запустить, необходимо использовать docker-compose

Для python-api временно используется **docker.sock (dind)** для сборки контейнеров для тестов и их выполнения.
***
**Так как docker-compose багнулся и не позволяет собрать билды с явным указанием Dockerfile, перед запуском compose необходимо сбилдить образы**


*Для dev среды:*

```bash
docker build -t front:latest -f ./packages/front/Dockerfile ./packages/front/
docker build -t pythonapi:latest -f ./packages/python-api/Dockerfile ./packages/python-api/
docker-compose -f docker-compose.dev.yml up
```

*В проде запущен docker swarm для быстрого обновления сервисов и билды контейнеров с оптимизацией.*

```bash
docker swarm init
docker build -t front:latest -f ./packages/front/Dockerfile ./packages/front/
docker build -t pythonapi:latest -f ./packages/python-api/Dockerfile ./packages/python-api/
docker stack deploy -c  docker-compose.prod.yml hack
```

*Если требуется обновление на проде, можно запустить команды.*
```bash
docker service update hack_pythonapi --image pythonapi:latest --force
docker service update hack_front --image front:latest --force
```
**На репо запущен github actions. Поэтому при пуше в репо этот процесс запускается автоматически.**
***
Приложение доступно по следующим адресам:

[https://hack.dokub.xyz](https://hack.dokub.xyz) - временный домен для фронта

[https://admin.hack.dokub.xyz](https://admin.hack.dokub.xyz) - временный домен для админки strapi

[https://hack.dokub.xyz/api/check](https://hack.dokub.xyz/api/check) - временный роут для запуска кода ученика. Принимает **POST** с **Json Data** которая указана ниже


***
*Пример json data для заведенной задачи:*
```json
{
    "id":1,
    "language": "python",
    "script": "def runTest(a,b):\n  return a+b"
}
```
---
**Пример запроса с правильным решением:**
```bash
~$ curl -X POST "https://hack.dokub.xyz/api/check" -d '{"id":1, "language": "python", "script": "def runTest(a,b):\n  return a+b"}'

{"result":"True","goodAnswer":["happyp"],"yourAnswer":["happyp"]}
```

**Пример запроса с неправильным решением:**
```bash
~$ curl -X POST "https://hack.dokub.xyz/api/check" -d '{"id":1, "language": "python", "script": "def runTest(a,b):\n  return a+b+a"}'

{"result":"False","goodAnswer":["happyp"],"yourAnswer":["happyphappy"]}
```

**Пример запроса с ошибкой в синтаксисе:**
```bash
curl -X POST "https://hack.dokub.xyz/api/check" -d '{"id":1, "language": "python", "script": "def runTest(a,b):\n  return a+b+с"}'

{"error":"Traceback (most recent call last):\n  File \"<string>\", line 3, in <module>\n  File \"<string>\", line 2, in runTest\nNameError: name 'с' is not defined\n"}
```