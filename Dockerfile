FROM node:7

WORKDIR /app

COPY packag*.json /app

RUN npm install; npm install -g nodemon

COPY . /app

EXPOSE 8080