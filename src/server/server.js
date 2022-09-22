import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { createUser } from "./controller/authController.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 3001;
dotenv.config();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(cors());

const connectionToDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connection to mongoDB is successfull!");
  } catch (error) {
    throw error;
  }
};

app.get("/", (req, res) => {
  res.send("working");
});

app.post("/register", createUser);

app.listen(port, () => {
  connectionToDB();
  console.log(`server started on port ${port}`);
});
