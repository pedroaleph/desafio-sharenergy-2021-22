import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Routes from "./Routes";

const { createMany } = require('./services/ClientService');
const { createOneUser } = require('./services/UserService');

const PORT = process.env.PORT || 5000;
const APP_ENVIRONMENT = process.env.APP_ENVIRONMENT ?? 'dev';
const MONGODB_URL =  process.env.DATABASE_URL ?? 'mongodb://127.0.0.1:27017/desafioSHARENERGY';
const app = express();

app.use(cors());
app.use(express.json());
app.use(Routes);
app.listen(PORT, () => {
    console.log(`Server Running here 👉 http://localhost:${PORT}`);
});

mongoose.connect(MONGODB_URL);

const db = mongoose.connection;

db.on("error", (error) => {
  console.log(error);
});

db.once("open", async (callback) => {
  if (APP_ENVIRONMENT === 'dev'){
    db.dropDatabase();
  }

  //console.log(db.get('clients'));  
  if (db.get('clients') === undefined ){
    const user = require('./resources/user.json');
    await createOneUser(user);

    const clients = require('./resources/dadosClientes.json');
    await createMany(clients);
  }
  console.log('Successfully connected to the database!');
});

db.on("close", () => {
    console.log('Connection has been successfully closed, see you again soon!');
});
  





