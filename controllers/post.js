const PostsModel = require('../models/post.js');
const db = require('../config/connect.js');
const result = require('../middleware/result.js');
const xssFilters = require('xss-filters');
const _ = require('underscore');
const uuid = require('uuid/v4');
const email = require('../middleware/email.js');
const config = require('../config/index.js').email;

const deliveryCommentReplyEmail = async ( doc, db ) => {
  if( doc.parents.length === 0 ) return;
  let user = await db.findOne({author_id: doc.parents[0]});
  let email_res = await email({
    subject: `${doc.author_name} 回复了您在 wuchengkai.com 上的评论`,
    text: `${doc.message}\n\n\t 您可以点此链接 ${config.base}${doc.thread_key} 进行查看`,
    from: config.user,
    to: user.author_email,
  });
  if( email_res.err ) 
    console.error( email_res.err );
  else
    console.log(`\u90AE\u4EF6\u53D1\u9001\u6210\u529F`);
}

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
      deliveryCommentReplyEmail( doc, PostsModel );
      resolve();
    }).catch((err)=>{
      console.error( err );
      ctx.body = result.fail(500, err.message.message, '');
      resolve();
    });
  });
};
