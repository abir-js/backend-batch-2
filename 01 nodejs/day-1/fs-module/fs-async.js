const fs = require("fs");
const path = require("path");

const fileName = "fs-async.txt";
const filePath = path.join(__dirname, fileName);

fs.writeFile(filePath, "writing asynchronously", "utf-8", (err) => {
  if (err) console.log(err);
  console.log("Successfully wrote on file");
});

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
});

fs.appendFile(filePath, ".\nAdded second line.", "utf-8", (err) => {
  if (err) console.log(err);
  console.log("Successfully edited file")
});

fs.unlink(filePath, (err) => {
  if (err) throw err;
  console.log(fileName, ' was deleted successfully');
});