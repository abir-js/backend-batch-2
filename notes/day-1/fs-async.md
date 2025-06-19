# FS module - async

### 📖 Read File (Async)

```js
const fs = require("fs");
const path = require("path");

const fileName = "fs-async.txt";
const filePath = path.join(__dirname, fileName);

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
});

```

### ✍️ Write File (Async)

```js
const fs = require("fs");
const path = require("path");

const fileName = "fs-async.txt";
const filePath = path.join(__dirname, fileName);

fs.writeFile(filePath, "writing asynchronously", "utf-8", (err) => {
  if (err) console.log(err);
  console.log("Successfully wrote on file");
});
```

### ➕ Append to File

```js
const fs = require("fs");
const path = require("path");

const fileName = "fs-async.txt";
const filePath = path.join(__dirname, fileName);

fs.appendFile(filePath, ".\nAdded second line.", "utf-8", (err) => {
  if (err) console.log(err);
  console.log("Successfully edited file")
});
```

### 🗑️ Delete File

```js
const fs = require("fs");
const path = require("path");

const fileName = "fs-async.txt";
const filePath = path.join(__dirname, fileName);

fs.unlink(filePath, (err) => {
  if (err) throw err;
  console.log(fileName, ' was deleted successfully');
});
```

### 📁 Create Directory

```js
fs.mkdir('new-folder', (err) => {
  if (err) throw err;
  console.log('Folder created!');
});
```
