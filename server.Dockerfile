FROM keymetrics/pm2:8-alpine

WORKDIR /build/server

# RUN npm install -g sequelize && npm install -g sequelize-cli
RUN npm install

# RUN sequelize db:migrate

EXPOSE 8080
EXPOSE 9222

CMD pm2-runtime pm2.config.json
