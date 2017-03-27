const PostsModel = require('../models/post.js');
const db = require('../config/connect.js');


module.exports = ( params, ctx ) => {
  return new Promise((resolve, reject) => {
    let entity = new PostsModel( params );
    entity.save().then((doc) => {
      ctx.body = doc;
      resolve();
    });
  });
};
