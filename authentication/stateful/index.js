import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import bcrypt from "bcrypt";
import { connectDB } from "./config/db.js";
// import uuid from "uuid";

import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Global Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 10,
    },
  })
);

app.get("/", (req, res) => {
  res.send("Hello from express");
});

// Routes
app.use("/api/users", userRoutes);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
