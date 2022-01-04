const fs=require("fs");
// const obj={
//     name : "lalit",
//     age : 19,
//  }
 
//  const jsondata=JSON.stringify(obj);
 //console.log(jsondata);
//  fs.writeFileSync("lalit.json",jsondata);
const data=fs.readFileSync("lalit.json","utf-8");
const objdata=JSON.parse(data);
objdata.name="kapil";
objdata.age=44;
console.log(objdata);
const jsondata=JSON.stringify(objdata);
fs.writeFileSync("lalit.json",jsondata);



