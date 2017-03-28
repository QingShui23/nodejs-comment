const PostsModel = require('../models/post.js');
const db = require('../config/connect.js');
const result = require('../middleware/result.js');
const _ = require('underscore');

module.exports = async ( params, ctx ) => {
  if( _.isEmpty( params ) ) 
    resolve( ctx.body = result.fail(500, '\u7F3A\u5C11\u53C2\u6570', '') );
  let doc = await PostsModel.findOne({post_id: params.post_id});
  if( doc === null ) 
    return ctx.body = result.fail(404, '\u5185\u5BB9\u4E0D\u5B58\u5728', '');
  let res = await PostsModel.remove({post_id: params.post_id});
  ctx.body = result.success({});
};
