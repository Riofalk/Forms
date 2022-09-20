import express  from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
const port = 3000;

app.use(express.json())
dotenv.config();

const connectionToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
    } catch(error) {
        console.log(error);
    };
};

app.listen(port, () => {
    connectionToDB();
    console.log(`Server started on port ${port}`)
})