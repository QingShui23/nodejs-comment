const PostsModel = require('../models/post.js');
const db = require('../config/connect.js');
const result = require('../middleware/result.js');
const xssFilters = require('xss-filters');
const _ = require('underscore');
const uuid = require('uuid/v4');

module.exports = ( params, ctx ) => {
  return new Promise(async (resolve, reject) => {
    if( _.isEmpty( params ) ) 
      resolve( ctx.body = result.fail(500, '\u7F3A\u5C11\u53C2\u6570', '') );
    params.message = xssFilters.inHTMLData( params.message );
    params.post_id = uuid();
    params.ip = ctx.ips.length > 0 ? ctx.ips[ctx.ips.length - 1] : ctx.ip;
    let user = await PostsModel.findOne({author_email: params.author_email});
    params.author_id = user === null ? uuid() : user.author_id;
    let entity = new PostsModel( params );
    entity.save().then((doc) => {
      ctx.body = result.success( doc );
      resolve();
    }).catch((err)=>{
      console.log( err );
      ctx.body = result.fail(500, err.message.message, '');
      resolve();
    });
  });
};
