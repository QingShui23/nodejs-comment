const mongoose = require('mongoose');
const schema = require('../schema/post.js');
const PostsModel = mongoose.model('posts', schema);

module.exports = PostsModel;