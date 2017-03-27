const PostsModel = require('../models/post.js');
const db = require('../config/connect.js');
const result = require('../middleware/result.js');

module.exports = async ( params, ctx ) => {
  let doc = await PostsModel.find({});
  ctx.body = result.success( doc );
};
