import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Welcome to logger api");
});

app.listen(PORT, () => console.log(`app is listening on http://localhost:${PORT}`));
