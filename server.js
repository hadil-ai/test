import cors from "cors"
import express from "express"
import mongoose from "mongoose"
const app=express()
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.status(200).send("yo")
})
app.listen(3000,()=>{console.log("app running")})