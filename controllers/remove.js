const PostsModel = require('../models/post.js');
const db = require('../config/connect.js');
const result = require('../middleware/result.js');

module.exports = async ( params, ctx ) => {
  let doc = await PostsModel.findOne({post_id: params.post_id});
  if( !doc ) ctx.body = result.fail(404, '\u5185\u5BB9\u4E0D\u5B58\u5728', '');
  let res = await PostsModel.remove({post_id: params.post_id});
  ctx.body = result.success({});
};
