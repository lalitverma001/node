const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/register",{
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false})
.then(()=>{
    console.log("db connectio is create");
}).catch((e)=>{
    console.log("no connection");
})