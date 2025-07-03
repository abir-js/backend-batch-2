import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send({
    message: "Welcome to logger api",
  });
});

router.get("/generate-token", (req, res) => {
  // TODO: call u.til method to create a random token
  const token = "token";

  res.status(200).send({
    message: "Token generated successfilly, save it for future use",
    data: token,
  });
});

export default router;
