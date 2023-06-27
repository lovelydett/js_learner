const Koa = require('koa');
const app = new Koa();

/*
* Compose different kinds of middlewares here
* */

app.use(async (ctx) => {
    ctx.body = 'Hello World from Koa2';
});

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});