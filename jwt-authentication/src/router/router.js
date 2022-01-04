const express=require("express");
const route=express.Router();
const Register=require("../schema/schema");


route.get("/",(req,res)=>{
    res.render("home");
})
route.get("/index",(req,res)=>{
    res.render("index");
})
route.get("/loging",(req,res)=>{
    res.render("loging");
})

route.post("/log",async(req,res)=>{
    try {
        const email=req.body.email;
        const pass=req.body.password;
        
        const useremail=await Register.findOne({email:email});
    //  const isMatch=bcrypt.compare(pass,useremail.password);
        if(useremail.password==pass){
            res.render("home");
        }
        else{
            res.send("this is invailid pass");
        }
    } catch (error) {
        console.log(error);
    }
 })
 
 route.post("/register",async(req,res)=>{
     try {
         // console.log(req.body.email)
         const password=req.body.password;
         const cpassword=req.body.confirmpassword;
         console.log(req.body.firstname)
         console.log(req.body.lastname)
         console.log(req.body.email)
         console.log(req.body.gender)
         console.log(req.body.age)
         console.log(req.body.password)
         console.log(req.body.confirmpassword)
         if(password===cpassword){
             const registerEmployee=new Register({
                 firstname:req.body.firstname,
                 lastname:req.body.lastname,
                 email:req.body.email,
                 gender:req.body.gender,
                 phone:req.body.phone,
                 age:req.body.age,
                 password:password,
                 confirmpassword:cpassword
                
                })
             const createdata= await registerEmployee.save();
             res.status(201).send(createdata)
 
  
         }else{
             res.send("password is not match");
         }
 
 
 
     } catch (error) {
         res.status(400).send(error);
         console.log(error);
     }
     
 })
 


module.exports=route;