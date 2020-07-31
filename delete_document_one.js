const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, database) {
  if (err) throw err;
  const mydb = database.db("itbycarlo");
  const myquery = { address: 'Mountain 21' };
  mydb.collection("customer").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    database.close();
  });
});