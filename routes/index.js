const post = require('../models/post.js');

module.exports = {
  'post': async (ctx, next) => {
    let params = ctx.request.body;
    await post( params, ctx );
    next();
  },
  'delete': async (ctx, next) => {

  },
  'alter': async (ctx, next) => {

  },
  'lists': async (ctx, next) => {

  }
};

