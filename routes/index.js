const post = require('../controllers/post.js');

module.exports = {
  'post': async (ctx, next) => {
    // let params = ctx.request.body;
    let params = {
      "post_id": 12138,
      "thread_id": 12138,
      "message": "呵呵",
      "ip": "12138",
      "likes": 12138,
      "parents": [12138],
      "author_id": 12138,
      "author_email": "wuchengkai0@gmail.com",
      "author_name": "ckwu",
      "author_url": "demo0.xyz",
      "thread_key": "demo0.xyz"
    };
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

