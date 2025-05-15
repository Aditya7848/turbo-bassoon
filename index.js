const fs = require("fs");
const path = require("path");

// fs.readFile('./files/starter.txt','utf8', (err, data) => {
//     if(err) throw err;
//     // console.log(data.toString())
//     console.log(data)
// })

fs.readFile(
  path.join(__dirname, "files", "starter.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    // console.log(data.toString())
    console.log(data);
  }
);

console.log("Hello...");

fs.writeFile(path.join(__dirname, "files", "reply.txt"),'bozo', (err) => {
  if (err) throw err;
  // console.log(data.toString())
  console.log("write Complete");
});

fs.appendFile(path.join(__dirname, "files", "test.txt"),'testing...bozo', (err) => {
  if (err) throw err;
  // console.log(data.toString())
  console.log("write Complete");
});

process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error : ${err}`);
  process.exit(1);
});
