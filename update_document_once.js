const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, database) {
  if (err) throw err;
  const mydb = database.db("itbycarlo");
  var myquery = { address: "Century 3" };
  var newvalue = { $set: {name: "Mickey", address: "Mouse 3" } };
  mydb.collection("customer").updateOne(myquery, newvalue, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    database.close();
  });
});