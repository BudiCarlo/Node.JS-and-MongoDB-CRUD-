const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, database) {
  if (err) throw err;
  const mydb = database.db("itbycarlo");
  const myquery = { address: /^G/ };
  const newvalue = {$set: {name: "Update"} };
  mydb.collection("customer").updateMany(myquery, newvalue, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + " document(s) updated");
    database.close();
  });
});