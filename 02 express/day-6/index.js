import express from "express";
import dotenv from "dotenv";
import fs from "fs";
import userRouter from "./Routes/user.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

//? inbuilt middlewares
app.use(express.json());

//? global middlewares
function logger(req, res, next) {
  const data = `{${new Date().toISOString()}} - ${req.method} - ${req.url} \n`;
  fs.appendFile("./logger.txt", data, "utf-8", (err) => {
    if (err) res.send(err.message);
    next();
  });
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello from Express ");
});

app.use("/api/v1/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

