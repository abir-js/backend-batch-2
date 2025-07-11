import { readTasks, writeTasks } from "../utils/task.js";

const getAllTask = async (req, res) => {
  if (!req.session.user)
    return res.status(401).json({ message: "Unauthorized" });

  const tasks = await readTasks();
  res.json(tasks.filter((task) => task.user === req.session.user.username));
};

const createTask = async (req, res) => {
  if (!req.session.user)
    return res.status(401).json({ message: "Unauthorized" });

  const { title, description } = req.body;
  const tasks = await readTasks();

  const newTask = {
    id: crypto.randomUUID(),
    title,
    description,
    username: req.session.user.username,
    complete: false,
  };

  tasks.push(newTask);
  await writeTasks(tasks);
  res.status(201).json(newTask);
};

const updateTask = (req, res) => {
  res.send("logout user");
};

const deleteTask = (req, res) => {
  res.send("logout user");
};

export { getAllTask, createTask, updateTask, deleteTask };
