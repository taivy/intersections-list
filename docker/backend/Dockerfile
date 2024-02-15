FROM python:3.10-alpine

WORKDIR /app
ADD ./backend/requirements.txt /app/backend/

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN pip install --upgrade pip
RUN pip install -r backend/requirements.txt

ADD ./backend /app/backend
ADD ./docker /app/docker