const PostsModel = require('../models/post.js');
const db = require('../config/connect.js');
const result = require('../middleware/result.js');

module.exports = async ( params, ctx ) => {
  let query = {post_id: params.post_id};
  let doc = await PostsModel.findOneAndUpdate(query, {message: params.message}, {});
  ctx.body = result.success( doc );
};
