// Create Database

const mongoose=require("mongoose");
const url="mongodb://localhost:27017/mynewdb"
mongoose.connect(url,{ useNewUrlParser: true ,useUnifiedTopology: true})
.then(()=>{
    console.log("connection create")
})
.catch((err)=>{
    console.log(err)
});

// create Schema

const newSchema= mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    age:{
        type:String,
        require:true
    },
    active:{
        type:Boolean,
        require:true
    }
});

// create mongoose.Collection

const Bcadata= mongoose.model("bca",newSchema);

// create document or insertation


const getinsert=async ()=>{
    try{
    const kapil=new Bcadata({
        name:"kapil",
        lastname:"verma",
        age:39,
        active:true
    })
    const mohit=new Bcadata({
        name:"mohit",
        lastname:"verma",
        age:99,
        active:true
    })
    const pavan=new Bcadata({
        name:"pavan",
        lastname:"verma",
        age:79,
        active:true
    })
    const arun=new Bcadata({
        name:"arun",
        lastname:"verma",
        age:19,
        active:true
    })
    const result = await Bcadata.insertMany([kapil,mohit,pavan,arun]);
    console.log(result);
}
catch (err){
        console.log(err);
        }
}
// getinsert();

const getread=async()=>{
const result = await Bcadata
.find({$and:[{lastname:"verma"},{age:19}]})
// .find({$or:[{lastname:"lalit"},{age:19}]})
// .find({name:{$nin:["lalit","kapil"]}})
// .find({name:{$in : ["lalit","kapil"]}})
// .find({age : {$gte:19}})
// .find({name:"kapil"},{name:1,_id:0});


console.log(result);
}
getread()