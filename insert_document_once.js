const MongoClient = require('mongodb');
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, database) {
  if (err) throw err;
  const mydb = database.db("itbycarlo");
  const mydoc = { name: "PT. Planet Mars", address: "Galaxy Andromeda" };
  mydb.collection("customer").insertOne(mydoc, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    database.close();
  });
});