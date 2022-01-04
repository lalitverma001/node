const fs=require("fs");
const http=require("http");

const server=http.createServer((req,res)=>{

    
    const rstream = fs.createReadStream("input.txt");
    
//     rstream.on("data",(chunkdata)=>{
//         res.write(chunkdata);
// });
//     rstream.on("end",()=>{
//         res.end();
//     });
//     rstream.on("error",(err)=>{
//         console.log(err);
//         res.end("file is not found");
//     });


});



server.listen(3300,"127.0.0.1");
