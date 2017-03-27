const mongoose = require('mongoose');
const connect = require('./connect.js');
const schema = require('../schema/post.js');
const PostsModel = mongoose.model('posts', schema);

module.exports = (params, ctx) => {
  connect((db)=>{
    const entity = new PostsModel( params );
    entity.save();
  });
}