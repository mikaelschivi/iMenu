const {MongoClient} = require('mongodb');
const fs = require('fs');
const { connect } = require('http2');

// MongoDB connectionString
// https://www.mongodb.com/docs/manual/reference/connection-string/
const connectionString = fs.readFileSync('./secret', 'utf-8').trim();

// Abre uma conexao com a cloud responsavel
// pelo nosso banco de dados
async function connectToDB(connectionString) {
  let client;
  
  try{
    client = new MongoClient(connectionString);
    console.log('connectionString:', connectionString);
    console.log('Connecting to MongoDB cluster');
    await client.connect(); 
    return client

  } catch (error) {
    console.error("Connection to MongoDB cluster FAILED:", error);
    process.exit();
  }
};

// facilita o trabalho de pegar o caminho correto da collection do item
// db -> collection = items -> lanche/pizza/sobremesa
async function getCollection(client, category) {
  const db = client.db('items');
  const collection = db.collection(category);

  return collection
}

// adiciona um item novo a database
// - deve ser um json
async function _create(name, value, category) {
  let client;
  const itemDocument = {nome:name, 
                        valor:value}

  try{
    client = await connectToDB(connectionString);
    const collection = await getCollection(client, category);
    // caso o item ja exista 
    if (await collection.findOne({ nome: name })) {
      console.log('Item "' + name + '" ja existe na tabela "' + category +'"');
      return false
    }
    await collection.insertOne(itemDocument);
    console.log("add query:", name, value, "in", category);
    return true

  } finally {
    console.log("Closing cluster connection");
    await client.close();
  }
};

// busca o item pelo nome
// muda as entries - deve ser um json
/*
exemplo de updatedFields
const updatedFields = {
  string nome: Xis Frango,
  double valor: 13.86,
};
*/
async function _update(name, updatedFields, category) {
  let client;
  try{
    client = await connectToDB(connectionString);
    const collection = await getCollection(client, category);
    await collection.updateMany(
      { name },
      { $set:updatedFields });
    console.log("updaty query to:", name, updatedFields), "in", category;
    return true

  } finally {
    console.log("Closing cluster connection");
    await client.close();
  }
};


// busca o item pelo nome
async function _find(name, category) {
  let client;
  try {
    client = await connectToDB(connectionString);
    const collection = await getCollection(client, category);
    console.log("find query for item:", name, "in", category);
    return await collection.findOne({ nome: name });

  } finally {
    console.log("Closing cluster connection");
    await client.close();
  }
}

// retorna todos os items de uma determinada collection
async function _findAll(category) {
  let client;
  try {
    client = await connectToDB(connectionString);
    const collection = await getCollection(client, category);
    console.log("find query for all items in", category);
    return await collection.find().toArray();

  } finally {
    console.log("Closing cluster connection");
    await client.close();
  }
}

// deleta item pelo nome
async function _delete(name, category) {
  let client;
  try{
    client = await connectToDB(connectionString);
    const collection = await getCollection(client, category);

    // caso nao exista
    if (!await collection.findOne({ nome: name })) {
      console.log("error in delete for inexisting item:", name, "in", category);
      return false
    }
    await collection.deleteOne({ nome: name });
    console.log("delete query:", name, "in", category)
    return true;

  } finally {
    console.log("Closing cluster connection");
    await client.close();
  }
};

module.exports = {
  _create,
  _update,
  _find,
  _findAll,
  _delete
};