const mongoose=require("mongoose");


mongoose.connect("mongodb://localhost:27017/crudDB"
// ,{
//     useNewUrlParser: true,
//     useCreateIndex:true,
//     useUnifiedTopology:true,
//     useFindAndModify:false}
    ).then(()=>{
    console.log("connection is create");
}).catch((e)=>{
    console.log(e);
})