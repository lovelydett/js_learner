"use strict";

const Koa = require("koa");
const BodyParser = require("koa-bodyparser");
const Router = require("koa-router");
const Logger = require("koa-logger");
const cors = require('koa-cors');
const serve = require("koa-static");
const mount = require("koa-mount");

const app = new Koa();

const PORT = process.env.PORT || 3003;

const staticPageServer = new Koa()
staticPageServer.use(serve(__dirname + "/frontend/build"));

// ****** set up router ****** //
app.use(mount("/", staticPageServer));
app.use(mount("/index", staticPageServer));
app.use(mount("/display_table", staticPageServer)); // all React routers should be mounted here

const router = require("./router");
app.use(router.routes()).use(router.allowedMethods());

app.use(BodyParser());
app.use(Logger());
app.use(cors());
// ****** end set router ****** //

app.listen(PORT, function () {
    console.log("==> Listening on port %s. Visit http://localhost:%s/", PORT, PORT);
});