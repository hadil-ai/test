const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose")

const app=express()
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.status(200).send("yo")
})
app.listen(3000,()=>{console.log("app running")})