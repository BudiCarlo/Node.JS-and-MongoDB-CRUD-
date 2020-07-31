const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, database) {
  if (err) throw err;
  var mydb = database.db("itbycarlo");
  mydb.createCollection("employee2", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    database.close();
  });
});