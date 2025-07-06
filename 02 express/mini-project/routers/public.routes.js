import { Router } from "express";
import { generateToken } from "../utils/token.utils.js";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send({
    message: "Welcome to logger api",
  });
});

router.get("/generate-token", (req, res) => {
  const token = generateToken();

  res.status(200).send({
    message: "Token generated successfilly, save it for future use",
    data: token,
  });
});

export default router;
