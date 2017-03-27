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

app.use(bodyParser());

// post
router.post('/post', routes.post);
// delete
router.delete('/delete', routes.remove);
// alter
router.post('/alter', routes.alter);
// list
router.post('/lists', routes.lists);

app.use(router.routes());

if( process.env.NODE_ENV === 'production' )
  app.use(logger());

app.listen(3000);

console.log('server started !'.green);