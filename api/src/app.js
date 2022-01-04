const express=require("express");
const app=express();
require("./conn/connection");
const Family=require("./schema/memberschema");
const memberRouter=require("./router/member");


const port=process.env.PORT||4000;
app.use(express.json());
app.use(memberRouter);



app.listen(port,(e)=>{
    console.log("app is listening  at port no 4000");
})