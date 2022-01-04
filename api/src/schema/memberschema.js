const mongoose=require("mongoose");
const validate=require("validator");

const faimilischema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    gmail:{
        type:String,
        required:true,
        // unique:[true,"this is alredy preasent"],
        // validate(value){
        //     if(!validate.isEmail(value)){
        //         throw new Error("invailide");
        //     }
        // }
    }
})

const Fimily=new mongoose.model("member",faimilischema);

module.exports=Fimily;
