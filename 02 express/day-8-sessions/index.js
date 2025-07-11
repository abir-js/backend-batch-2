import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cookieParser("mysecretkey"));

app.use(
  session({
    secret: "mysecretkey",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  })
);

app.get("/", (req, res) => {
  console.log(req.session);
  console.log(req.session.id);
  res.send("Hello from Express ");
});

app.get("/login", (req, res) => {
  req.session.user = {
    name: "Abir",
    email: "abir@gmail.com",
    age: 21,
  };
  res.json(`Login successful, ${req.session.user.name}`);
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.send("Logout Successfully");
});

app.listen(PORT, () =>
  console.log(`app is listening on http://localhost:${PORT}`)
);
