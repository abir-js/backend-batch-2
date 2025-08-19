import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middlewares.js";

const router = Router();

router.get("/dashboard", authMiddleware, (req, res) => {
  res.status(200).send({
    message: "Welcome to Dashboard page",
    data: req.user,
  });
});

export default router;
