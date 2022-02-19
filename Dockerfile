FROM node:14.17.0
WORKDIR /var/www
COPY package*.json ./

RUN yarn install
COPY . .
RUN yarn build:prod

EXPOSE 3000

CMD node server.js
