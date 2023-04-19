const http=require("http");
const fs=require("fs");
const server= http.createServer((req,res)=>{
    //console.log("Connection request recieved");
  //console.log(req.url);

    //res.write("Hello");

    //res.end();
    if(req.url==="/")
    {
    res.write("Welcome to home page");
    res.end();
    }
    else
    {
       filename= req.url.substring(1);
       console.log(filename);
      // res.writeHead("Content-type","text/html");

       res.write(fileRead(filename));
       res.end();



    }
    // else if(req.url==="/about")
    // {
    //     //res.write("About us page");
    //     //res.end();
    //     fs.readFile("./aboutus.html","utf-8",(err,data)=>{
    //         res.write(data);
    //         res.end();
    //     })
    // }
    // else if(req.url==="/style.css")
    // {
    //     //res.write("About us page");
    //     //res.end();
    //     fs.readFile("./style.css","utf-8",(err,data)=>{
    //         res.write(data);
    //         res.end();
    //     })
    // }

    // else if(req.url==="/script.js")
    // {
    //     //res.write("About us page");
    //     //res.end();
    //     fs.readFile("./script.js","utf-8",(err,data)=>{
    //         res.write(data);
    //         res.end();
    //     })
    // }
    // else if(req.url==="/contact")
    // {
    //     res.write("Contact  us page");
    //     res.end();
    // }
    // else
    // res.end();






});

function fileRead(filename)
{
   let data= fs.readFileSync("./"+filename,"utf-8");
   return data;


}
server.listen(3000);
// server.on("connection",(socket)=>{

//     console.log("Connection request recieved");
// })

// const Logger=require("./Logger");
// const logObject=new Logger();
// logObject.on("MessageLogged",function(){
//     console.log("Event handled");
// })
// logObject.log('Demo');

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
