const emailjs = require('emailjs');
const email_config = require('../config/index.js').email;
const server = emailjs.server.connect( email_config );

module.exports = ( email ) => {
  return new Promise((resolve, reject) => {
    // subject: "标题"
    // text:    "内容" 
    // from:    "来源" 
    // to:      "发送对象"
    server.send(email, (err, message) => { if( err ) console.log(err); resolve({err: err, message: message}); });
  });
}

