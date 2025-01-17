import dotenv from "dotenv"

import connectDB from "./db/db.js";
import express from "express"
import {app} from './app.js'

dotenv.config({
    path:'./.env'
})







connectDB()
.then(()=> {
    app.on("error" , (error) => {
        console.log("ERR",  error);
        throw error; 
        
    })
    app.listen(process.env.PORT || 8000 , ()=> {
        console.log(`server is running at port : ${process.env.PORT}`); 
    })
})
.catch((err) => {
    console.log("mongodb connection is failed try again ",err);
    
})



