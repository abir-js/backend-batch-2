import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  createTask,
  deleteTask,
  getAllTask,
  updateTask,
} from "../controllers/task.controller.js";

const taskRouter = Router();

taskRouter.get("/", authMiddleware, getAllTask);
taskRouter.post("/create-task", authMiddleware, createTask);
taskRouter.put("/:id", authMiddleware, updateTask);
taskRouter.delete("/:id", authMiddleware, deleteTask);

export default taskRouter;
