const { CosmosClient } = require("@azure/cosmos");

// Define the database and container IDs
const databaseId = "MyDatabase";
const containerId = "MyContainer";

// Define the Cosmos DB endpoint, key and client
const endpoint = "https://<your-account-name>.documents.azure.com:443/";
const key = "<your-account-key>";
const client = new CosmosClient({ endpoint, key });

// Create the database if it doesn't exist
async function createDatabase() {
  const { database } = await client.databases.createIfNotExists({
    id: databaseId
  });
  console.log(`Created database:\n${database.id}\n`);
}

// Create the container if it doesn't exist
async function createContainer() {
  const { container } = await client
    .database(databaseId)
    .containers.createIfNotExists({ id: containerId });
  console.log(`Created container:\n${container.id}\n`);
}

// Insert a JSON document into the container
async function insertDocument(document) {
  const { resource } = await client
    .database(databaseId)
    .container(containerId)
    .items.create(document);
  console.log(`Inserted document:\n${JSON.stringify(resource)}\n`);
}

// Query the container for all documents
async function queryDocuments() {
  const querySpec = {
    query: "SELECT * FROM c"
  };
  const { resources } = await client
    .database(databaseId)
    .container(containerId)
    .items.query(querySpec)
    .fetchAll();
  resources.forEach((document) => {
    console.log(JSON.stringify(document));
  });
}

// Run the functions in sequence
async function run() {
  await createDatabase();
  await createContainer();
  await insertDocument({ id: "1", name: "John Doe", age: 30 });
  await insertDocument({ id: "2", name: "Jane Smith", age: 25 });
  await queryDocuments();
}

run().catch((error) => {
  console.error(error);
});
