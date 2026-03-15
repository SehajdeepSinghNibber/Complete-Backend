import express from "express";

const PORT = 8000;
const app = express();//Server instance is being created

app.get(`/`,(req,res)=>{
    res.send("Server is Running");
});

app.get(`/about`,(req,res)=>{
    res.send(`<h1>This is the about Page</h1>`);
});

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})