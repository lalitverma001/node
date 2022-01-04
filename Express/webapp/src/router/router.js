const express=require("express");
const route=express.Router();


route.get("/",(req,res)=>{
    res.cookie("lalit",'verms is sername');
    res.send("this is lalit but from router ");
})

module.exports=route;