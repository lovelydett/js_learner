"use strict";

const Router = require("koa-router");
const HttpStatus = require("http-status");

const router = new Router({ prefix: '/api' });

module.exports = router;

const users = [
    { username: 'test', password: 'test' },
    { username: 'test2', password: 'test2' },
];
let currentUsers = new Set();
// POST /login
router.post("/login", async (ctx) => {
    const { username, password } = ctx.request.body;
    let isLogin = false;
    for (let user of users) {
        if (user.username === username && user.password === password) {
            isLogin = true;
            currentUsers.add(username);
            break;
        }
    }

    if (isLogin) {
        ctx.status = HttpStatus.OK;
        ctx.body = { username: username, password: password };
    }
    if (username === "admin" && password === "admin") {
        ctx.status = HttpStatus.OK;
        ctx.body = { username: username, password: password };
    } else {
        ctx.status = HttpStatus.UNAUTHORIZED;
        ctx.body = { error: "Invalid username or password" };
    }

});