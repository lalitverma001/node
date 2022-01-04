const fs= require("fs");

// fs.writeFile("read.txt","today is awesome day", (err)=>{
//     console.log("files is created");
// });

// fs.appendFile("read.txt","task is completed",(err)=>{
//     console.log("success");
// })

fs.readFile("read.txt","utf-8",(err,data)=>{
    console.log(data);
})


