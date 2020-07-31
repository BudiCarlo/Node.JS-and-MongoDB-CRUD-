const MongoClient = require('mongodb');
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, {useUnifiedTopology : true}, function(err, database) {
  if (err) throw err;
  const mydb = database.db("itbycarlo");
  const myquery = { address: "Galaxy Andromeda" };
  mydb.collection("customer").find(myquery).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    database.close();
  });
});