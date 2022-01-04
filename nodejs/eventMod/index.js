const EventEmitter=require("events");

const event = new EventEmitter();

event.on("sayMyName",(sc,mag)=>{
    console.log(`status code is ${sc} and the page is ${mag}`);
});
event.on("sayMyName",()=>{
    console.log("lalit verma");
})
event.on("sayMyName",()=>{
    console.log("kapil")
})
event.emit("sayMyName",200,'ok');


