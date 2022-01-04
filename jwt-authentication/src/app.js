const express=require("express");
const app=express();
const path=require("path");
const hbs=require("hbs");
require("./conn/db");
const port=process.env.PORT||7200;
const route=require("./router/router");
const Register=require("./schema/schema");

const tamplates_path=path.join(__dirname,"./templates/views")
const partials_path=path.join(__dirname,"./templates/partials")

app.set("view engine","hbs");
app.set("views",tamplates_path);
hbs.registerPartials(partials_path);


app.use(route);



app.post("/register",async(req,res)=>{
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





// app.get("/",(req,res)=>{
//     res.send("this is lalit verma");
// })
app.listen(port,(e)=>{
    console.log("server is running at port no. 7200");
})