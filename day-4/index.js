const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  fs.readFile("day-4/hello.txt", (err, data) => {
    res.send(data);
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
