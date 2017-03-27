const PostsModel = require('../models/post.js');
const db = require('../config/connect.js');

module.exports = async ( params, ctx ) => {
  let doc = await PostsModel.find({});
  ctx.body = doc;
};
