const fs = require("fs");
const path = require("path");

const fileName = "hello.txt";
const filePath = path.join(__dirname, fileName);

/**
 * fs.writeFileSync(): writes data to a file. If the file does not exit, it will be created. If the file exists, it overwrites the content.
 *
 *  Syntax => fs.writeFileSync( filePath, data, options )
 *
 *  filepath => The file path to write to.
 *  data => The content
 *  options => Optional. Includes encoding('utf-8'), mode or flags.
 */

const fileData = fs.writeFileSync(filePath, "This is a test file", "utf-8");
console.log(fileData);

/**
 *  fs.readFileSync(): Reads a file's content and returns it as a string ot buffer.
 *
 *  Syntax => const data = fs.readFileSync(filePath, options);
 *  filepath => path tof the file to read.
 *  options => Optional. use utf-8 to get a string data.
 */
const readFile = fs.readFileSync(filePath, "utf-8");
console.log(readFile);

/**
 *  fs.appendFileSync(): Appends data to a file. If a file doesn't exists, it creates a file.
 *
 *  Syntax => const data = fs.appendFileSync(filePath, data, options);
 *  filepath => path tof the file to read.
 * `data` => Content to add in file
 *  options => Optional. use utf-8 to get a string data.
 */
const appendFile = fs.appendFileSync(filePath, "\nThis is new line", "utf-8");
console.log(appendFile);

/**
 *  fs.appendFileSync(): deletes a file by its path
 *
 *  Syntax => const data = fs.unlinkSync(filePath);
 */
const unlinkFile = fs.unlinkSync(filePath);
console.log(unlinkFile);
