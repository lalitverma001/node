// const express = require("express");

// const app = express();

// app.get("/" , (req,res)=>{
//     res.send("hello frome the express");
// });
// app.get("/about" , (req,res)=>{
//     res.send("hello frome the about");
// });
// app.listen(3200,()=>{
//     console.log("success");
// });
const hbs=require("hbs");
const path = require("path");
const express = require("express");
const app=express();

// console.log(path.join(__dirname,"../public"));
//const staticpath=path.join(__dirname,"../public");
// console.log(path.join(__dirname,"./templates"))
 const templatepath = path.join(__dirname,"./templates/views")
 const partialpath = path.join(__dirname,"./templates/partials")

//  const partialpath = path.join(__dirname,"../partials")
//how to use hbs
app.set('view engine',"hbs");
app.set("views",templatepath);
hbs.registerPartials(partialpath);

app.get("",(req,res)=>{
    res.render("index",{
        name:"mohan",
    });
})
app.get("/about",(req,res)=>{
    res.render("about",{
        name:"mohan",
    });
})
app.get("*",(req,res)=>{
    res.render("404",{
        errorcomemnt:"opps this is about us pages",
        name:"mohan",
    })
})
// app.use(express.static(staticpath))
app.get("/",(req,res)=>{
   res.send("this is a home page");

});




app.listen(3500,()=>{
    console.log("success");
});