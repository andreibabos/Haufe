"use strict";

let Express = require("express");
let Path = require("path");
let Favicon = require("serve-favicon");
let Logger = require("morgan");
let CookieParser = require("cookie-parser");
let BodyParser = require("body-parser");

let Database = require("./src/middleware/database");

var apiRouter = require('./src/routes/api');
let sequelize = Database.Connect(true);
let app = Express();


app.use(Logger("dev"));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));
app.use(CookieParser());

app.use('/api', apiRouter);

app.listen(8080, () => {
  console.log("SErver listening on port 8080")
})

module.exports = app;
