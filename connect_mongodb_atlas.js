//const MongoClient = require('mongodb').MongoClient;
const { MongoClient } = require('mongodb');

async function main(){
    //const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
	const uri = "mongodb+srv://test_user:test_password@beecluster.bsvw6.mongodb.net/mytestdb";
    const client = new MongoClient(uri, { useUnifiedTopology: true });
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};