const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const colors = require('colors');
const cookies = require('koa-cookie');
const emailjs = require('emailjs');
const routes = require('./routes/index.js');

require('./routes/entry.js')(router, routes);

app.use(bodyParser());
app.use(router.routes());

if( process.env.NODE_ENV === 'production' )
  app.use(logger());

app.listen(3000);

console.log('server started !'.bgGreen);