FROM python:3.9
ENV PYTHONBUFFERED 1
LABEL maintainer "Diniz Intelligent"
COPY . /var/www
WORKDIR /var/www/backend/
RUN apt-get update && apt-get install -y gcc && apt-get install -y default-libmysqlclient-dev && pip install -r requeriments.txt && python manage.py migrate
ENTRYPOINT gunicorn --bind 0.0.0.0:2000 dinizintelligent.wsgi
EXPOSE 2000