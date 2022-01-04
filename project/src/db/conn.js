const mongoose=require("mongoose");
const validator=require("validator");


mongoose.connect("mongodb://localhost:27017/StudentDB",{
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("connection is create");
}).catch((e)=>{
    console.log("no connection");
})