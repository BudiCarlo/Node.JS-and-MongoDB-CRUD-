const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://test_user:test_password@beecluster.bsvw6.mongodb.net/mytestdb";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  console.log("Connected Successfully");
  db.close();
});