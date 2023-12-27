// require('dotenv').config({path: './env'});
import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

// Cinfiguring path to Environment variables
dotenv.config({
  path: "./env",
});

// Connecting to Database
connectDB()
  .then(() => {
    //  If connection successful, Database start on configured/default Port
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at Port: ${PORT}`);
    });
  })
  .catch((error) => {
    // Catch the error, if conection to Database failed
    console.log("MongoDB connection failed: ", error);
  });

/*
import express from "express";

const app = express();

 ( async () => {
try {
    await mongoose.connect(`${process.env.MONGODB_URI}`)
    app.on(error, () => {
        console.log("Error:", error);
        throw error
    })

    app.listen(process.env.PORT, (error) => {
        console.log(`App is listening in Port ${process.env.PORT}`);
    })
} catch (error) {
    console.log("Error: ", error);
    throw error;
}
}) ()
*/
