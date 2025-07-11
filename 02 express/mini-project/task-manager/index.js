import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import expressSession from "express-session";

//? import routes
import authRoutes from "./routes/auth.route.js";
import taskRoutes from "./routes/task.route.js";
0;

// Global Middlewares
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser("mysecretkey"));
app.use(
  expressSession({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.get("/", (req, res) => {
  res.send("welcome to task manager app");
});

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/tasks", taskRoutes)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
