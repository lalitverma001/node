const fs = require("fs");
// creating a new file 
// fs.writeFileSync("read.txt","this is lalit")

// fs.writeFileSync("read.txt","this is lalit verma\n");
// fs.appendFileSync("read.txt","how are you i am fine")
// const buff_data=fs.readFileSync("read.txt");

// orgdata=buff_data.toString();
// console.log(orgdata);
// fs.renameSync("read.txt","readwrite.txt");


// CRUD operation of file system
//fs.mkdirSync("lalitfs");
// fs.writeFileSync("lalitfs/bio.txt","my name is lalit from biloda ");

// const data=fs.readFileSync("lalitfs/bio.txt","utf-8");

// console.log(data);

//fs.renameSync("lalitfs/bio.txt","lalitfs/myBio.txt");

// fs.unlinkSync("lalitfs/myBio.txt");

//fs.rmdirSync("lalitfs");

fs.rename("index.js","Sync.js",(err)=>{
    console.log(err);
});