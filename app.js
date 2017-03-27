const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const logger = require('koa-logger');

const routes = require('./routes/home.js');

router.get('/', (ctx, next) => {
  ctx.body = 'Hello World';
  next();
});

app.use(router.routes());
if( process.env.NODE_ENV === 'production' )
  app.use(logger());

app.listen(3000);