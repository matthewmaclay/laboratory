FROM python:3

WORKDIR /opt/app/

COPY requirements.txt .

RUN pip install -r requirements.txt && apt install ca-certificates
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"] 