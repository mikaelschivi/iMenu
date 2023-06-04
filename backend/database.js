const {MongoClient} = require('mongodb');
const fs = require('fs');
const DATABASE_connectionString = fs.readFileSync('./secret', 'utf-8').trim();

// Connection URL and database name
const url = DATABASE_connectionString;
const dbName = 'items';

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

// cria uma nova entry na categoria desejada
// - deve ser um json
export async function createItemDocument(collection, ItemDocument){
  await collection.insertOne(ItemDocument);
}

// busca o item pelo nome
// muda as entries - deve ser um json
export async function updateItemByName(collection, name, updatedFields){
  await collection.updateMany(
    { name },
    { $set:updatedFields }
  );
}

// busca o item pelo nome
export async function findItem(collection, name){
  return collection.find({ name }).toArray();
}

// deleta item pelo nome
export async function deleteItem(collection, name) {
  await collection.deleteMany({ name });
}

