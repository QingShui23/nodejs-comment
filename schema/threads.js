const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const theadsSchema = new Schema({
  "thread_id": {type: Number, required: true },
  "created_at": {type: Date, required: true, default: Date.now() },
  "updated_at": {type: Date, required: true, default: Date.now() },
  "likes": {type: Number},
  "thread_key": {type: String, required: true },
  "title": {type: String, required: true },
  "url": {type: String, required: true }
});