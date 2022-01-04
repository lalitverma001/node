const express=require("express");
const path=require("path");
const hbs=require("hbs");
const app=express();
require("./db/conn");
const Student=require("./schema/student");
const studentRouter=require("./router/studentRouter");

const port=process.env.PORT||3700;


app.use(express.json());
app.use(studentRouter);

const templates_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");

app.set("view engine","hbs");
app.set("views",templates_path);
hbs.registerPartials(partials_path);




// app.get("/",(req,res)=>{
//     res.end("this is lalit");
// })
app.listen(port,(err)=>{
    console.log("app is listening at port no.3700");
})
