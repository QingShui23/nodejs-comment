const emailjs = require('emailjs');
const email_config = require('./config/index.js').email;
const server = emailjs.server.connect( email_config );

module.exports = () => {
  return new Promise((resolve, reject) => {
    server.send({
       subject: "",
       text:    "", 
       from:    "", 
       to:      ""
    }, (err, message) => {
      resolve();
    });
  });
}

