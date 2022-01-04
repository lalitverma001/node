const path=require("path");

console.log(path.dirname("E:/learn nodejs/nodejs/pathModule"));

console.log(path.extname("E:/learn nodejs/nodejs/pathModule/path.js"));
console.log(path.basename("E:/learn nodejs/nodejs/pathModule/path.js"));

console.log(path.parse("E:/learn nodejs/nodejs/pathModule/path.js"))

console.log(path.isAbsolute("E:/learn nodejs/nodejs/pathModule/path.js"))

console.log(path.normalize("E:/learn nodejs//nodejs//pathModule/path.js"))

console.log(path.resolve("E:/learn nodejs/nodejs","pathModule/path.js"))

const myPath=path.parse("E:/learn nodejs/nodejs/pathModule/path.js");

console.log(myPath.name);


