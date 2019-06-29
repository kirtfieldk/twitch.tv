# Grab Image

FROM node:10

WORKDIR /app

COPY package.json .
RUN npm install
COPY . .

CMD ls -ltr && npm install && npm start