FROM node:14.17.0
WORKDIR /var/www
COPY . .
RUN yarn && yarn build:prod
EXPOSE 3000
CMD node ./server.js
