FROM keymetrics/pm2:10-alpine as BASE

FROM base as build

# web
WORKDIR /build/web
ADD ./web .
RUN npm install && npm run build

FROM base as release

# WORKDIR /build/web
# ADD ./web .
# COPY ./dist /web/
COPY --from=build /build/web/dist/web2 /web/

# server
WORKDIR /build/server
ADD ./server .
# RUN npm install -g sequelize && npm install -g sequelize-cli
RUN npm install
# RUN sequelize db:migrate

EXPOSE 8080
EXPOSE 9222

CMD [ "pm2-runtime", "pm2.config.json" ]
