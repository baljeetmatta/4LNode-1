const Logger=require("./Logger");
const logObject=new Logger();
logObject.on("MessageLogged",function(){
    console.log("Event handled");
})
logObject.log('Demo');

// const EventEmitter=require("events");
// const event=new EventEmitter();
// const data=require("./another");
// data.Logging('Test');


// event.on("RequestRec",()=>{

//     console.log("Event is raised and listened");
    
// })

// event.on("Message",()=>{

//     console.log("Message Called");
    
// })

// //raise an event
// event.emit("RequestRec");


//console.log(event);

//const x=require("./another");
//const path=require("path");
//console.log(path);
//var data=path.parse(__filename);
//console.log(data);
//const osData=require("os");
//console.log(osData.totalmem());
//const fsData=require("fs");
//var data=fsData.readFileSync("./demo.txt");
//console.log(data);
// fsData.readFile("./demo.txt",(err,data)=>{

// });






//console.log(x);
//x('Welcome to node');
//x=2;
//x.Logging('welcome to node');
//x.test();
//path,fs,events,os


//console.log('Hello');
