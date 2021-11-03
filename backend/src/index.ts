import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Routes from "./Routes";

const PORT = process.env.PORT || 5000;
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

db.once("open", (callback) => {
  console.log(`Connected to ${MONGODB_URL} `);
});

// db.on("close", () => {
//     console.log('Connection has been successfully closed, see you again soon!');
// });
  





