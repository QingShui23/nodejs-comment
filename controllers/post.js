const PostsModel = require('../models/post.js');
const db = require('../config/connect.js');
const result = require('../middleware/result.js');

module.exports = ( params, ctx ) => {
  return new Promise((resolve, reject) => {
    let entity = new PostsModel( params );
    entity.save().then((doc) => {
      ctx.body = result.success( doc );
      resolve();
    }).catch((err)=>{
      ctx.body = result.fail(500, err.message.message, '');
      resolve();
    });
  });
};
