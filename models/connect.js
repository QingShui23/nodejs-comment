const mongoose = require('mongoose');
const config = require('../config/index.js');
const db = mongoose.connection;

mongoose.connect( config.db_url );

db.on('error', console.error.bind(console, 'connection error:'));

module.exports = (cb) => {
  db.once('open', () => {
    cb( db );
    console.log('we\'re connected!'.bgGreen);
  });
};
