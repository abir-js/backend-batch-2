import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import expressSession from "express-session";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  expressSession({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", (req, res) => {
  res.send("welcome to task manager app");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
