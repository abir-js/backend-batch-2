import express from "express";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  cookieParser(
    "df2a1d5ea150eddf49fa95cf6223fcfe2234e383ee608c7acab66232a3bf7545"
  )
);

app.get("/", (req, res) => {
  res.send("Hello from Express ");
});

app.get("/set-cookies", (req, res) => {
  //   res.cookie("token", "my-token", {
  //     maxAge: 1000 * 60 * 60 * 24,
  //     httpOnly: true,
  //   });
  //   res.cookie("token", "my-token");
  //   res.cookie("theme", "dark");
  res.cookie("age", "21", { signed: true });
  res.send("Cookie set successfully");
});

// app.get("/get-cookies", (req, res) => {
//   // console.log(req.cookies); // undefined
//   console.log(req.headers.cookie); // token=my-token
//   res.send("Cookies received successfully");
// });

app.get("/get-cookies", (req, res) => {
  //   console.log(req.cookies); // { token: 'my-token' }
  //   console.log(req.cookies.token); // my-token
  console.log(req.signedCookies.age);
  res.send("Cookies received successfully");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
