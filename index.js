// Basics for what we're doing.

// EXPRESS JS: Lets us make routes and stuff.
import express from 'express';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000; // use port 3000

// Serve the static landing page at the "/" url.
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/frontend/landingPage.html")
});

// Serve the static messageboard page at the "/messageBoard" url.
app.get('/messageBoard', (req, res) => {
  res.sendFile(__dirname + "/frontend/messageBoard.html")
});

// Start the server!
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// quick-mongo-super
// const connectionURI = process.env.MONGO_URI
// const { QuickMongoClient, QuickMongo } = require('quick-mongo-super')
// const quickMongoClient = new QuickMongoClient(connectionURI)

// const main = async () => {

//   await quickMongoClient.connect()
//   const mongo = new QuickMongo(quickMongoClient, {
//     name: 'database',
//     collectionName: 'collectionName' // (optional)
//   })

//   // Set a value with KEY:VALUE (key o)
//   await mongo.set('exampleKey', 'somevalue')

//   // Check if it exists: booleans.
//   const isSimpleValueInDatabase = mongo.has('exampleKey')
//   console.log(isSimpleValueInDatabase) // -> true

//   // Get a value with KEY
//   const value = mongo.get('exampleKey')
//   print(value) // -> 'somevalue'

// }
// main()

// quickMongoClient.on('connect', () => {
//     console.log('Connected to MongoDB.')
// })

// quickMongoClient.on('disconnect', () => {
//     console.log('Disconnected from MongoDB.')
// })


// UUID: Creates randomized UUID to make message and comment IDs.
import { v4 as uuidv4 } from 'uuid';

uuidv4(); // -> something like '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
