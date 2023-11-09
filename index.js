'use strict';

var config = require("config");

var express = require("express"),
    app = express(),
    port = process.env.PORT || config.port || 9902;

var routes = require("./api/routes.js");
routes(app);

app.listen(port);

console.log("tradfri restful API listens on port: "+port);
