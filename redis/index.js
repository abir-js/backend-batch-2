const express = require("express");
const app = express();
const { redis } = require("./redis");

app.get("/", async (req, res) => {
  try {
    const views = await redis.incr("pageViews");
    res.send(`This page has been visited ${views} times`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
