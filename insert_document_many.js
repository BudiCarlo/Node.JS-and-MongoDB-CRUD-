const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, database) {
  if (err) throw err;
  const mydb = database.db("itbycarlo");
  const myobj = [
    { name: 'Abdul', address: 'Andalusia 1'},
    { name: 'Budi', address: 'Botany Garden 2'},
    { name: 'Carlo', address: 'Century 3'},
    { name: 'Deni', address: 'Diva 4'},
    { name: 'Erlan', address: 'Earth 5'},
    { name: 'Fifin', address: 'Flifer 6'},
    { name: 'Gana', address: 'Greenlake 7'},
    { name: 'Hasan', address: 'Houston 8'},
    { name: 'Iin', address: 'Indiana 9'},
    { name: 'Jono', address: 'Jakarata 10'},
    { name: 'Kiki', address: 'Karawaci 11'},
    { name: 'Lisa', address: 'Liliana 12'},
    { name: 'Memet', address: 'Manhattan 13'},
    { name: 'Noni', address: 'Nevada 14'}
  ];
  mydb.collection("customer").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    database.close();
  });
});