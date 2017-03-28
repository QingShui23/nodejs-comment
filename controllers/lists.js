const PostsModel = require('../models/post.js');
const db = require('../config/connect.js');
const result = require('../middleware/result.js');
const _ = require('underscore');

module.exports = async ( params, ctx ) => {
  if( _.isEmpty( params ) ) 
    return ctx.body = result.fail(500, '\u7F3A\u5C11\u53C2\u6570', '');
  let doc = await PostsModel.find({thread_key: params.thread_key});
  ctx.body = result.success( doc );
};
