

const express=require('express');
const app=express();
const connectDB=require('./db/db.js');
connectDB();

app.get('/',(req,res)=>{
    res.send('Hello World');
})
module.exports=app;