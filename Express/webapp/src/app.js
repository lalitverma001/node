const express=require("express");
const path=require("path");
const hbs=require("hbs");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const app = express();
const Register=require("./schema/schema")
require("./db/conn");
const port=process.env.PORT||3100;


const static_path=path.join(__dirname,"../public")
const tamplates_path=path.join(__dirname,"../templates/views")
const partials_path=path.join(__dirname,"../templates/partials")

// app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",tamplates_path);
hbs.registerPartials(partials_path);

app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.cookie("lalit",'verms is sername');
    res.render("home");
})

app.get("/register",(req,res)=>{
    res.render("index");
})

app.get("/loging",(req,res)=>{
    res.render("loging");
})
app.post("/log",async(req,res)=>{
   try {
       const email=req.body.email;
       const pass=req.body.password;
       
       const useremail=await Register.findOne({email:email});
    //    console.log(useremail.password);
    //    console.log(pass);
    const isMatch=bcrypt.compare(pass,useremail.password);
       if(isMatch){
           res.render("index");
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
        
        const password=req.body.password;
        const cpassword=req.body.confirmpassword;
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
    }
    
})

const createToken = async()=>{
    const token=await jwt.sign({_id:"612a098977327507209acc70"},"mynameislalitvermaandiwantinmncthisis",{
        expiresIn:"2 seconds"
    });
    console.log(token);
    const userver=await jwt.verify(token,"mynameislalitvermaandiwantinmncthisis");
    console.log(userver);
}

app.get("/weather",(req,res)=>{
    res.send("this is weather page");
})

app.get("*",(req,res)=>{
    res.send("this is error page");
})


createToken();

app.listen(port,()=>{
    console.log("port is lesting");
})