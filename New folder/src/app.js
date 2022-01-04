const express=require("express");
const path=require("path");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const app = express();
require("./DB");
const port=process.env.PORT||3100;
const Register=require('./schema');
const { read } = require("fs");
const { decode } = require("querystring");

app.use(express.urlencoded({extended:false}))
app.use(express.json());





app.get("/",(req,res)=>{
    res.send("this is home page");
})

app.post("/login",async(req,res)=>{
   try {
       const email=req.body.email;
       const pass=req.body.password;
       const user=req.body;
       const useremail=await Register.findOne({email:email});
    //    console.log(useremail.password);
    //    console.log(pass);
    const isMatch=await bcrypt.compare(pass,useremail.password);
       if(isMatch){
        jwt.sign({user:user},"mynameislalit",(err,token)=>{
            res.json({
                token,
            })
        })   
           }
       else{
           res.send("this is invailid pass");
       }


   } catch (error) {
       console.log(error);
   }
})

app.post("/register",async(req,res)=>{
    try {
           console.log(req.body);
           const data=new Register(req.body);
                const createdata= await data.save();
                res.status(201).send(createdata)
                
    } catch (error) {
        res.status(400).send(error);
    }
    
})

// app.post("/details",(req,res)=>{
//     const token=req.header("authorization");
//     jwt.verify(token,"mynameislalit",(err,decode)=>{
//         if(err){
//             res.send(err);
//         }else{
//             res.json({
//                 token,
//                 message:"create....",
//                 decode,
//             })
//         }
//     })
    
// })
app.post("/details",auth,(req,res)=>{
                const data=req.user
                res.json({
                    data,
                    message:"create....",
                    
                })
            })

function auth(req,res,next){
    const token=req.header("authorization");
    if(!token){
        return res.send({
            success:false,
            message:"No token provided",
        });

    }
    try {
       const decode= jwt.verify(token,"mynameislalit")
       req.user=decode;
        next();
    } catch (error) {
        res.status(400).send("invalid token");
    }
}



app.get("*",(req,res)=>{
    res.send("this is error page");
})




// createToken();

app.listen(port,()=>{
    console.log("port is lesting");
})