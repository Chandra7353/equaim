const express=require("express")
require("dotenv").config()
const cors =require("cors")
require("./Config/dbconnection")
let signuproutes = require("./Router/signup.router")
let feedbackroutes= require("./Router/suggestion.router")



let app= express()
app.use(express.json())
app.use(cors())

app.use("/api/user",signuproutes)
app.use ("/api/suggestion", feedbackroutes)





app.use("*", (req, res, next)=>{
    res.status(404).json("Page n found")
 })


 app.use((err,req, res, next)=>{
    res.status(400).json({error:true, message:err.message,data:"error data !!!!!!!!!!!!!"})
 })

app.listen(process.env.PORT, ()=>{
    console.log(`server running sucessfully ${process.env.PORT}`)
} )