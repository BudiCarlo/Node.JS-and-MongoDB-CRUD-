const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, database) {
  if (err) throw err;
  const mydb = database.db("itbycarlo");
  mydb.collection("customer").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    database.close();
  });
});