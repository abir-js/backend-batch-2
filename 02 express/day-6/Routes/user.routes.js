import { Router } from "express";

const userRouter = Router();

userRouter.get("/get-all-users", (req, res) => {
  res.send("Get all users");
});

userRouter.get("/get-user", (req, res) => {
  res.send("Get user");
});

export default userRouter;
