FROM node:8-alpine

WORKDIR /web

COPY ./web/package.json ./

RUN npm install

EXPOSE 3001

CMD ["npm", "start", "--host=0.0.0.0"]