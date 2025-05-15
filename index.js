const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
    console.log("data = ",data);

    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"),data) //unlink is equal to delete...
    await fsPromises.writeFile(path.join(__dirname, "files", "promiseWrite.txt"),data)
    await fsPromises.appendFile(path.join(__dirname, "files", "promiseWrite.txt")," \n nice to meet you i just appended this file and fucked it up.")
    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "renamePromiseWrite.txt")
    );

    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "renamePromiseWrite.txt"),
      "utf8"
    );
    console.log("newData = ",newData);

  } catch (err) {
    console.log(err);
  }
};

fileOps()

// fs.readFile('./files/starter.txt','utf8', (err, data) => {
//     if(err) throw err;
//     // console.log(data.toString())
//     console.log(data)
// })

// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     // console.log(data.toString())
//     console.log('Read Complete.')
//     console.log(data);
//   }
// );

// fs.writeFile(path.join(__dirname, "files", "reply.txt"),'Nice to meet you...', (err) => {
//   if (err) throw err;
//   // console.log(data.toString())
//   console.log("Write Complete.");

//   fs.appendFile(
//     path.join(__dirname, "files", "test.txt"),
//     "\n\n yes, yes you are asynced...",
//     (err) => {
//       if (err) throw err;
//       // console.log(data.toString())
//       console.log("Append Complete.");

//       fs.rename(
//         path.join(__dirname, "files", "reply.txt"),
//         path.join(__dirname, "files", "newReply.txt"),

//         (err) => {
//           if (err) throw err;
//           // console.log(data.toString())
//           console.log("Rename Complete.");
//         });
//     });
// });

process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error : ${err}`);
  process.exit(1);
});
