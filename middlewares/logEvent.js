const path = require("path")
const fspromises = require("fs").promises;
const fs = require("fs");
const { v4 : uuid } = require("uuid")
const { format } = require("date-fns")

const logAction = async(msg, logFile)=>{
 const dateTime = format(new Date(), 'yyyyMMdd\tHH:mm:ss');
 const logItem = `${dateTime}\t${uuid()}${msg}\n`;

 try {
    if(!fs.existsSync(path.join(__dirname, "..", "log"))){
        await fspromises.mkdir(path.join(__dirname, "..", "log"))
     }
     await fspromises.appendFile(path.join(__dirname, "..", "log", logFile), logItem)
 } catch (error) {
    console.error(error)
 }
 
}

const logger = (req,res,next)=>{
    logAction(`${req.method}\t${req.headers.origin}\t${req.url}`, "eventsLog.txt");
    next()
}

module.exports = logger