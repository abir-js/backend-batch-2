import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import expressSession from "express-session";
import bcrypt from "bcrypt";
import { connectDB } from "./config/db";
// import uuid from "uuid";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello from express");
});

connectDB()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  })

app.listen(4000, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
