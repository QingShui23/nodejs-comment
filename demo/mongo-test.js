// https://docs.mongodb.com/getting-started/node/query/
// mongodb
// robomongo
// https://github.com/Automattic/mongoose
// http://mongoosejs.com/

// db.posts.insert({
//     "post_id": "评论ID",
//     "thread_id": "文章ID",
//     "message": "评论内容",
//     "created_at": "创建时间",
//     "updated_at": "修改时间",
//     "ip": "发表的IP",
//     "likes": "点赞",
//     "parents": ["评论父级"],
//     "author_id": "用户ID",
//     "author_email": "用户邮箱",
//     "author_name": "用户名称",
//     "author_url": "用户主页",
//     "thread_key": "一般是文章的PATH"
// });

// db.posts.insert({
//     "post_id": "评论ID",
//     "thread_id": "文章ID",
//     "message": "评论内容",
//     "created_at": "创建时间",
//     "updated_at": "修改时间",
//     "ip": "发表的IP",
//     "likes": "点赞",
//     "parents": ["评论父级"],
//     "author_id": "用户ID",
//     "author_email": "用户邮箱",
//     "author_name": "用户名称",
//     "author_url": "用户主页",
//     "thread_key": "一般是文章的PATH"
// });

// db.threads.insert({
//   "thread_id": "文章ID",
//   "created_at": "创建时间",
//   "updated_at": "修改时间",
//   "likes": "点赞",
//   "thread_key": "一般是文章的PATH",
//   "title": "文章名称",
//   "url": "文章URL"
// });

const mongoose = require('mongoose');
const config = require('./config/index.js');
const db = mongoose.connection;

mongoose.connect( config.db_url );

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('we\'re connected!');
});
