require('dotenv').config();
const express=require("express");
const app=express();
require("./db/conn");
const cors=require("cors");
const bodyParser=require("body-parser");
const port=process.env.PORT||8000;
const route=require("./router/studentRouter")
const cookieparser=require('cookie-parser');


app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieparser());
app.use(cors());
app.use(route);
// console.log(process.env.SECRET_KRY);
app.listen(port,()=>{
    console.log("server is running on 8000");
})
