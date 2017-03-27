const mongoose = require('mongoose');
const config = require('../config/index.js');
const db = mongoose.connection;

mongoose.Promise = global.Promise;
mongoose.connect( config.db_url );

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('we\'re connected!'.bgGreen);
});

module.exports = db;