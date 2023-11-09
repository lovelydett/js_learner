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
// POST api/login
router.post('/login', async (ctx) => {
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

// GET api/table
router.get('/table', async (ctx) => {
    console.log('GET api/table')
    const data = [
        {
            name: 'Book1',
            numPage: 110,
        },
        {
            name: 'Book2',
            numPage: 120,
        },
        {
            name: 'Book3',
            numPage: 130,
        },
    ];

    ctx.type = 'application/json';
    ctx.status = HttpStatus.OK;
    ctx.body = data;
});