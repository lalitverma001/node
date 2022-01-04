const express=require("express");
const app=express();
require("./db/conn");
const Student=require("./models/students");


app.use(express.json());
const port= process.env.PORT||8000;
// app.get("/",(req,res)=>{
//        res.send("hello this is home side by lalit")
// })

// app.post("/students",(req,res)=>{
//     console.log(req.body);
//     const user=new Student(req.body);
//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((e)=>{ 
//         res.status(400).send(e);
//     })

//     // res.send("hello this is lalit");
// })


app.post("/students",async (req,res)=>{
    try{
        console.log(req.body);
        const user=new Student(req.body);
        const createuser= await user.save();
        res.status(201).send(createuser)
    }catch(err){
        res.status(400).send(err)
    }
    
})

app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
})