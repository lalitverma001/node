const express=require("express");
const validator=require("validator");
const Student=require("../schema/student");

const router=new express.Router();

router.use(express.urlencoded({extended:false}))

router.get("/",(req,res)=>{
    res.render("index",{
        viewTitle:"Student"
    });
})

router.post("/register",async(req,res)=>{
    try {
            const registerEmployee=new Student({
                name:req.body.name,
                contact:req.body.contact,
                subjects:req.body.subjects,
                class:req.body.class,
                society:req.body.society,
                year:req.body.year,   
            })
           
            const createdata= await registerEmployee.save();
            res.status(201).send(createdata)
    } catch (error) {
        res.status(400).send(error);
    }
    
})


router.get("/list",async(req,res)=>{
    try {
       const studentdata=await Student.find((err,docs)=>{
           res.render("list",{
               viewTitle:"Student",
               list:docs
            });
       }); 

    } catch (error) {
       res.status(400).send(error); 
    }
})

router.get("/:id",(req,res)=>{
    try {
        const _id = req.params.id;
    } catch (error) {
        
    }
   
})

module.exports=router;