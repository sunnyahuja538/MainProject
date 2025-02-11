const dotenv= require('dotenv');
dotenv.config();
const http=require('http');
const app=require("./app.js");
const PORT=process.env.PORT||3000
//Creates an http server
const server=http.createServer(app);


server.listen(PORT,()=>{
    console.log('server is running');
});