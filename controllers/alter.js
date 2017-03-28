const PostsModel = require('../models/post.js');
const db = require('../config/connect.js');
const result = require('../middleware/result.js');
const xssFilters = require('xss-filters');
const _ = require('underscore');

module.exports = async ( params, ctx ) => {
  if( _.isEmpty( params ) ) 
    return ctx.body = result.fail(500, '\u7F3A\u5C11\u53C2\u6570', '');
  let query = {post_id: params.post_id};
  params.message = xssFilters.inHTMLData( params.message );
  let doc = await PostsModel.findOneAndUpdate(query, {message: params.message}, {});
  if( doc === null ) return ctx.body = result.fail(404, '\u5185\u5BB9\u4E0D\u5B58\u5728', '');
  ctx.body = result.success( doc );
};
