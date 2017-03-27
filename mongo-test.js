// https://docs.mongodb.com/getting-started/node/query/
// mongodb
// robomongo

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/test';
MongoClient.connect(url, (err, db) => {
  let startup_log = db.collection('restaurants').find();
  startup_log.each((err, doc) => {
    console.dir( doc );
  });
  db.close();
});
