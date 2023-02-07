const express=require("express");


const app=express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).send("yo")
})
app.listen(3000,()=>{console.log("app running")})