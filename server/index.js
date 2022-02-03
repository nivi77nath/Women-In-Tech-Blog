//Backend implementation:
//1. Connect to Database using mongoose
//2. Create routes - diff folder - using express.Router()
//3.


import express from 'express';
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

//allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served
//we need to do this before app.use('/post) to prevent network error
app.use(cors());

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb" }));


//using express middleware to connect postRoutes to our application
app.use('/posts', postRoutes); //the first parameter is the starting path for all the routes inside the posts.js file

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// connecting to the mongoDB database 
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
    .catch((error) => console.log(error.message)); //ensures that no errors are thrown
