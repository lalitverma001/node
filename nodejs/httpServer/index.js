const http=require("http");
const server=http.createServer((req,res)=>{
   // console.log(req.url);
   if(req.url=="/"){
    res.end("hello frome the other side");
   }else if(req.url=="/about"){
       res.write("this is about page ok!");
       res.end();
   }else{
       res.writeHead(404,{"content-type":"text/html"});
       res.end("<h1>404 error pages.</h1>")
   }
});

server.listen(3200,"127.0.0.1",()=>{
    console.log("listening to the port no 3200");
});

