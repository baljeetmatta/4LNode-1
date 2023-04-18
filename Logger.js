const EventEmitter = require("events");

class Logger extends EventEmitter {
    log(message) {
        console.log(message);
        this.emit("MessageLogged");

    }
}
module.exports=Logger;