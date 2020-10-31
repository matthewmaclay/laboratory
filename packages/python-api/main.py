import docker
from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel
import requests
import json

#client = docker.from_env()
client = docker.DockerClient(base_url='unix://var/run/docker.sock')
client.images.build(path="./", dockerfile=".docker/javascript.docker", tag="platform:javascript")
client.images.build(path="./", dockerfile=".docker/python.docker", tag="platform:python")
app = FastAPI()

class Item(BaseModel):
    id: int
    language: str
    script: str
    func_name: str

@app.post("/check")
async def script_check(item: Item):
    response = requests.get(f'https://admin.hack.dokub.xyz/exercises/{item.id}')
    response_json = response.json()
    result_values = []
    tests_scripts = ""
    try:
        if item.language == "python":
            for test in response_json["tests"]:
                result_values.append(test["result"])
                tests_scripts += f'print({item.func_name}{test["args"][0]["value"], test["args"][1]["value"]})\n'
            formated_script = f'{item.script}\n{tests_scripts}'
            res = client.containers.run(f'platform:{item.language}', f'"{formated_script}"').decode("utf-8").split()
            json_res = jsonable_encoder({"result": f"{res == result_values}"})
            return JSONResponse(content=json_res)
        elif item.language == "javascript":
            res = []
            for test in response_json["tests"]:
                result_values.append(test["result"])
                tests_scripts = f'({item.script}){test["args"][0]["value"], test["args"][1]["value"]};'
                res.append(client.containers.run(f'platform:{item.language}', f'"{tests_scripts}"').decode("utf-8").rstrip())
            json_res = jsonable_encoder({"result": f"{res == result_values}"})
            return JSONResponse(content=json_res)

    except docker.errors.ContainerError as e:
        return jsonable_encoder({"error": e.stderr})