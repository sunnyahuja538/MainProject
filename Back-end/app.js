const express=require('express');
const app=express();
const connectDB=require('./db/db.js');
const userRoutes=require('./routes/user.routes.js');
const cors=require('cors');
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/users',userRoutes);
module.exports=app;