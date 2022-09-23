import express  from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/authRoute.js"
import userRoute from "./routes/userRoute.js"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))

app.use(express.json())
dotenv.config();

app.use('/api', authRoute);
app.use('/api', userRoute);

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