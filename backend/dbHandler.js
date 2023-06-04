const {MongoClient} = require('mongodb');
const fs = require('fs');
const DATABASE_connectionString = fs.readFileSync('./secret', 'utf-8').trim();

// MongoDB connectionString
// https://www.mongodb.com/docs/manual/reference/connection-string/
const url = DATABASE_connectionString;
const dbName = 'items';

/*  
Abre uma conexao com a cloud responsavel
pelo nosso banco de dados
- acesso pela connectionString
*/
export async function connectToDB(url) {
  let client;
  
  try{
    client = new MongoClient(url);
    console.log('Connecting to MongoDB cluster');
    await client.connect(); 
    return client

  } catch (e) {
    // Se caso ocorrer algum erro, printa no console o que aconteceu
    console.error("Connection to MongoDB cluster FAILED:", e);
    process.exit()
  }
}

// Lista todas as tabelas existentes
// Funcao para debug
export async function listDatabases(client) {
  let client;
  
  try{
    client = await connectToDB(url);
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));

  } finally {
    await client.close();
  }
};

// cria uma nova entry na categoria desejada
// - deve ser um json
export async function createDocument(collection, ItemDocument) {
  let client;

  try{
    client = await connectToDB(url);
    await collection.insertOne(ItemDocument);
  
  } finally {
    await client.close();
  }
}

// busca o item pelo nome
// muda as entries - deve ser um json
// exemplo de updatedFields
/*
const updatedFields = {
  nome: Xis Frango,
  valor: 13.86,
  Ingredientes: { pao, salada, tomate, frango }
};
*/
export async function updateItemByName(collection, name, updatedFields) {
  let client;
  
  try{
    client = await connectToDB(url);
    await collection.updateMany(
      { name },
      { $set:updatedFields });

  } finally {
    await client.close();
  }
}

// busca o item pelo nome
export async function findByName(collection, name) {
  let client;

  try{
    client = await connectToDB(url);
    return collection.find({ name }).toArray();
  
  } finally {
    await client.close();
  }
}

// deleta item pelo nome
export async function deleteByName(collection, name) {
  let client;

  try{
    client = await connectToDB(url);
    await collection.deleteMany({ name });
 
  } finally {
    await client.close();
  }
}