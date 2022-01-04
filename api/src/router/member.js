const express=require("express");
const Family=require("../schema/memberschema");

const router=new express.Router();



router.post("/faimily",async (req,res)=>{
    try{
        console.log(req.body);
        const data= new Family(req.body);
       const createdata= await data.save();
        res.status(200).send(createdata);
    }catch(e){
        res.status(401).send(e)
    }
})

router.get("/faimily",async(req,res)=>{
    try {
       const membersdata=await Family.find(); 
       if(!membersdata){
           return res.status(400).send();
       }
       else{
           res.status(200).send(membersdata);
       }
    } catch (error) {
       res.status(400).send(error); 
    }
})



router.get("/faimily/:id",async(req,res)=>{
    try {
        const _id=req.params.id;
        const memberdata=await Family.findById(_id);
        console.log(memberdata);
        if(!memberdata){
           res.status(400).send();
        }else{
            
            res.send(memberdata);
        }
        
    } catch (error) {
        res.status(401).send(error);
    }
})





router.patch("/faimily/:id",async(req,res)=>{
    try {
        const _id=req.params.id;
        const updatedata=await Family.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        
       
        res.send(updatedata);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.delete("/faimily/:id",async(req,res)=>{
   try {
        const _id = req.params.id;
        const deletedata=await Family.findByIdAndDelete(_id);
        if(!deletedata){
            res.status(400).send()
        }else{
            res.status(200).send(deletedata);
        }
   } catch (error) {
       res.status(400).send(error);
   }
   
   
})



// app.post("/faimily",(req,res)=>{
//      console.log(req.body);
//      const data=new Family(req.body);
//      data.save().then(()=>{
//          res.send(data);
//      }).catch((e)=>{
//          res.send(e);
//      })
// // res.send("this is lalit verma frome home page");
// })


module.exports=router;