const PostsModel = require('../models/post.js');
const db = require('../config/connect.js');


module.exports = async ( params, ctx ) => {
  let doc = await PostsModel.findOne({post_id: params.post_id});
  if( !doc ) ctx.body = '不存在';
  let result = await PostsModel.remove({post_id: params.post_id});
  ctx.body = '删除成功';
};
