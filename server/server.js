// const express = require("express")

import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
dotenv.config();


//instatiate the express app
const app = express()
const port  = process.env.PORT || 5000
const MONGOURI = process.env.MONGOURI


//api routes


app.get("/", (req, res) => {
    res.send("Hello world")
})



mongoose.connect(MONGOURI)

.then(() => {
    app.listen(port ,() => {
        console.log(`App listening on port : ${port} `)
        console.log(`App connected to db`)
    })  
})
.catch((err) => {
    console.log(err)
})









