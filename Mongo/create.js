const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/lalitdata",{ useNewUrlParser: true , useUnifiedTopology: true })
.then(()=>{console.log("connetion create")})
.catch((err)=>{console.log(err)});

// create a schema

const vermaSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    lastname:String,
    age:Number,
    date:{
        type:Date,
        default:Date.now
    }
});
// collection create
const Vermadata=new mongoose.model("vermadata",vermaSchema);
// console.log(Date.now)

// create document or insert

const createDocument=async()=>{
    try{
    const manish=new Vermadata({
        name : "manish",
        lastname:"verma",
        age:19,
    })
    const anil=new Vermadata({
        name : "anil",
        lastname:"verma",
        age:19,
    })
    const sunil=new Vermadata({
        name :"sunil",
        lastname:"verma",
        age:19,
    })
    const goutam=new Vermadata({
        name : "goutam",
        lastname:"verma",
        age:19,
    })
    const result= await Vermadata.insertMany([manish,anil,sunil,goutam]);
    console.log(result)
}
catch(err){
    console.log(err);
    }
}
// createDocument();


const getdocument=async ()=>{
    const result = await Vermadata.find({name:"lalit"},{name:1,_id:0});
    console.log(result);
}


getdocument();

