const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postsSchema = new Schema({
  "post_id": {type: String, required: true },
  // "thread_id": {type: String, required: true },
  "message": {type: String, required: true },
  "created_at": {type: Date, required: true, default: Date.now() },
  "updated_at": {type: Date, required: true, default: Date.now() },
  "ip": {type: String, required: true, default: '' },
  "likes": {type: Number},
  "parents": {type: Array},
  "author_id": {type: String, required: true },
  "author_email": {type: String, required: true },
  "author_name": {type: String, required: true },
  "author_url": {type: String},
  "thread_key": {type: String, required: true }
});

module.exports = postsSchema;