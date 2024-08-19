FROM node:slim
WORKDIR /todo-api
COPY . /todo-api
RUN npm install
EXPOSE 3000
CMD node server.js