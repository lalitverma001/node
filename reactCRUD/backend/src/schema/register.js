const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const jwt=require('jsonwebtoken');
const autoIncrement=require('mongoose-auto-increment');
const userSchema=mongoose.Schema({
    name: String,
    lastname: String,
    email: String,
    password: Number,
    tokens:[{
        token:{
            type:String
        }
    }]
})

 userSchema.methods.generatedAuthToken=async function(){
    try {
        // console.log("inside of jwt");
        // console.log(this._id);
        const token=jwt.sign({_id:this._id},process.env.SECRET_KRY);
        // console.log(token);
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}

autoIncrement.initialize(mongoose.connection);


// userSchema.pre("save",async function(next){
//     console.log(this.password);
//       this.password=await bcrypt.hash(this.password,10);
//     console.log(this.password);
   
//     next();
// })

const registerUser=mongoose.model("register",userSchema);
module.exports=registerUser;