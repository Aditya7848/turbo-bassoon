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
    console.log('Read Complete.')
    console.log(data);
  }
);

console.log("Hello...");

fs.writeFile(path.join(__dirname, "files", "reply.txt"),'Nice to meet you...', (err) => {
  if (err) throw err;
  // console.log(data.toString())
  console.log("Write Complete.");

  fs.appendFile(
    path.join(__dirname, "files", "test.txt"),
    "\n\n yes, yes you are asynced...",
    (err) => {
      if (err) throw err;
      // console.log(data.toString())
      console.log("Append Complete.");

      fs.rename(
        path.join(__dirname, "files", "reply.txt"),
        path.join(__dirname, "files", "newReply.txt"),
        
        (err) => {
          if (err) throw err;
          // console.log(data.toString())
          console.log("Rename Complete.");
        });
    });
});



process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error : ${err}`);
  process.exit(1);
});
