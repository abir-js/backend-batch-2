const fs = require("fs/promises");
const path = require("path");

const fileName = "fsPromises.txt";
const filePath = path.join(__dirname, fileName);

fs.writeFile(filePath, "Writing on this file using fs/promises")
  .then(() => console.log("Successfully wrote on ", fileName))
  .catch((err) => console.log(err));

fs.readFile(filePath, "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

fs.appendFile(filePath, "\nAppend file is also working", "utf-8")
  .then(() => console.log("Successfully updated ", fileName))
  .catch((err) => console.log(err));

fs.unlink(filePath)
  .then(() => console.log("Successfully Deleted ", fileName))
  .catch((err) => console.log(err));
