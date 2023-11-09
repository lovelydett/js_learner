"use strict";

const Koa = require("koa");
const BodyParser = require("koa-bodyparser");
const Router = require("koa-router");
const Logger = require("koa-logger");
const cors = require('koa-cors');
const serve = require("koa-static");
const mount = require("koa-mount");
const fs = require('fs');

const app = new Koa();

const PORT = process.env.PORT || 3003;

// const staticPageServer = new Koa()
// staticPageServer.use(serve(__dirname + "/frontend/build"));

// ****** set up router ****** //
// app.use(mount("/", staticPageServer));
// app.use(mount("/index", staticPageServer));
// app.use(mount("/display_table", staticPageServer));

app.use(BodyParser());
app.use(Logger());
app.use(
    cors({
        origin: function(ctx) {
            if (ctx.url.startsWith('/api')) {
                return '*'; // accept all
            }
            return 'http://localhost:' + PORT; // only accept request from this domain
        },
        maxAge: 5,
        credentials: true,
        allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
        exposeHeaders: ['WWW-Authenticate', 'Server-Authorization']
    })
);

const router = require("./router");
app.use(router.routes()).use(router.allowedMethods());

// ****** end set router ****** //

app.listen(PORT, function () {
    console.log("==> Listening on port %s. Visit http://localhost:%s/", PORT, PORT);
});