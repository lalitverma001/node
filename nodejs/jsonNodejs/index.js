const fs=require("fs");
const bioData={
    name : "lalit",
    age: 19,
    lastname:"verma",
};
// const jsondata=JSON.stringify(bioData);
// console.log(jsondata);

// const onbjdata=JSON.parse(jsondata);
// console.log(onbjdata.name);

// const jsdata=JSON.stringify(bioData);
// fs.writeFile("lalit.json",jsdata,(err)=>{
//     console.log("done");
// });
fs.readFile("lalit.json", "utf-8",(err,data)=>{
    // console.log(data);
    
const org=JSON.parse(data);
console.log(org);
});


