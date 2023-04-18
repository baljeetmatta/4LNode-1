const EventEmitter=require("events");
const event=new EventEmitter();

function log(message)
{
    console.log(message);
    event.emit("Message");
}
function test()
{
    console.log('Test called');
}

// module.exports.log=log;
// module.exports.test=test;
module.exports={Logging:log,test};



