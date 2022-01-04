const mongoose=require("mongoose");
const bcrypt=require("bcrypt");

const employeSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
   
    password:{
        type:String,
        required:true,
        // unique:true
    },
    
})

employeSchema.pre("save",async function(next){
    // console.log(this.password);
      this.password=await bcrypt.hash(this.password,10);
    // console.log(this.password);
   
    next();
})

const Register=new mongoose.model("register",employeSchema);

module.exports=Register;