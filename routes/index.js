const post = require('../controllers/post.js');
const remove = require('../controllers/remove.js');
const alter = require('../controllers/alter.js');
const lists = require('../controllers/lists.js');

exports.post = async (ctx, next) => {
  let params = ctx.request.body;
  await post( params, ctx );
  next();
}

exports.remove = async (ctx, next) => {
  let params = ctx.request.body;
  await remove( params, ctx );
  next();
}
exports.alter = async (ctx, next) => {
  let params = ctx.request.body;
  await alter( params, ctx );
  next();
}
exports.lists = async (ctx, next) => {
  let params = ctx.request.body;
  await lists( params, ctx );
  next();
}


