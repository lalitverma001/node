const mongoose=require("mongoose");
const validator=require("validator");

const studentschema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        require:true
    }, 
    subjects:String, 
    class:{
        type:String,
        require:true
    }, 
    society:String, 
    year:{
        type:Number,
        require:true
    }
});

const Student=new mongoose.model("student",studentschema);

module.exports=Student;