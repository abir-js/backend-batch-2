# 📂 Node.js `fs/promises` Module

The `fs/promises` API in Node.js provides **Promise-based** versions of the `fs` (file system) methods. It enables modern **async/await** syntax for file operations.

> Introduced in Node.js **v10+**, stable in **v14+**

---

## ✅ Importing `fs/promises`

```js
const fs = require('fs/promises');
```

Or with ES Modules:

```js
import * as fs from 'fs/promises';
```

---

## 🔹 Common `fs/promises` Methods

| Method            | Description                                   |
| ----------------- | --------------------------------------------- |
| `fs.readFile()`   | Reads a file                                  |
| `fs.writeFile()`  | Writes to a file (creates or overwrites)      |
| `fs.appendFile()` | Appends data to a file                        |
| `fs.unlink()`     | Deletes a file                                |
| `fs.rename()`     | Renames or moves a file                       |
| `fs.mkdir()`      | Creates a directory                           |
| `fs.readdir()`    | Reads directory contents                      |
| `fs.stat()`       | Gets metadata for a file or directory         |
| `fs.rm()`         | Deletes files or folders (recursive too)      |
| `fs.copyFile()`   | Copies a file                                 |
| `fs.access()`     | Checks file or folder existence & permissions |

---

## 🔍 Example Usage with `promise chaining`

### 📖 Read File

```js
const fs = require("fs/promises");
const path = require("path");

const fileName = "fsPromises.txt";
const filePath = path.join(__dirname, fileName);

fs.readFile(filePath, "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
```

### ✍️ Write File

```js
const fs = require("fs/promises");
const path = require("path");

const fileName = "fsPromises.txt";
const filePath = path.join(__dirname, fileName);

fs.writeFile(filePath, "Writing on this file using fs/promises")
  .then(() => console.log("Successfully wrote on ", fileName))
  .catch((err) => console.log(err));
```

### ➕ Append to File

```js
const fs = require("fs/promises");
const path = require("path");

const fileName = "fsPromises.txt";
const filePath = path.join(__dirname, fileName);

fs.appendFile(filePath, "\nAppend file is also working", "utf-8")
  .then(() => console.log("Successfully updated ", fileName))
  .catch((err) => console.log(err));
```

### 🗑️ Delete File

```js
const fs = require("fs/promises");
const path = require("path");

const fileName = "fsPromises.txt";
const filePath = path.join(__dirname, fileName);

fs.unlink(filePath)
  .then(() => console.log("Successfully Deleted ", fileName))
  .catch((err) => console.log(err));
```