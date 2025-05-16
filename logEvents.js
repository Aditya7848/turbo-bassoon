const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

const fs = require("fs");
const fsPromise = require("fs").promises;
const path = require("path");

const logEvents = async (message) => {
  const dateTime = `${format(new Date(), "dd-MM-yyyy \tHH:mm:ss")}`;
  const logTime = `${dateTime}\t${uuid()}\t${message}\n`;

  console.log(logTime);

  try {
    if(!fs.existsSync(path.join(__dirname, 'logs' ))){
        await fsPromise.mkdir(path.join(__dirname, 'logs'))
    }
    await fsPromise.appendFile(
      path.join(__dirname, "logs", "eventLog.txt"),
      logTime
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = logEvents;
