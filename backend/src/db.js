const { MongoClient } = require("mongodb");
import * as dotenv from "dotenv";

dotenv.config();

// Connect to your Atlas cluster
// const client = new MongoClient(url);

const dbURI = process.env.MONGODB_URI || "";
console.log(dbURI);
let client;

export const connectToDB = async () => {
  console.log("Connecting to MongoDB");
  console.log(dbURI);
  client = await MongoClient.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).catch((err) => {
    console.log("Error connecting to MongoDB", err);
  })
  db = await client.db("users");
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
};

export const getDBConnection = (dbName) => client.db(dbName);




// async function run() {
//   try {
//     await client.connect();
//     console.log("Successfully connected to Atlas");
//   } catch (err) {
//     console.log(err.stack);
//   } finally {
//     console.log("Closing the connection");

//     await client.close();
//   }
// }

// run().catch(console.dir);

// const { MongoClient, ServerApiVersion } = require("mongodb");
// const dbURI =
//   "mongodb+srv://ayluorellana:uA0PlBqTobzjaHd8@cluster0.3o6v6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version

// let client;
// //let client = new MongoClient(dbURI);

// export const connectToDB = async () => {
//   console.log("Connecting to MongoDB");
//   client = await MongoClient.connect(dbURI)
//     .catch((err) => {
//     console.log("Error connecting to MongoDB", err);
//   });
//   console.log("Pinged your deployment. You successfully connected to MongoDB!");
// };

// export const getDBConnection = (dbName) => client.db(dbName);
