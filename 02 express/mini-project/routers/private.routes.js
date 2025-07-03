import { Router } from "express";

const router = Router();

router.get("/dashboard", (req, res) => {
  res.status(200).send({
    message: "Welcome to Dashboard page",
  });
});


export default router;
