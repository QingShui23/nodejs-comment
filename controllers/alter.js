const PostsModel = require('../models/post.js');
const db = require('../config/connect.js');
const result = require('../middleware/result.js');
const util = require('util');

module.exports = async ( params, ctx ) => {
  let query = {post_id: params.post_id};
  let doc = await PostsModel.findOneAndUpdate(query, {message: params.message}, {});
  if( doc === null ) return ctx.body = result.fail(404, '\u5185\u5BB9\u4E0D\u5B58\u5728', '');
  ctx.body = result.success( doc );
};
