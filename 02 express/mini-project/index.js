import express from "express";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import publicRoutes from "./routers/public.routes.js";
import privateRoutes from "./routers/private.routes.js";
import { logMiddleware } from "./middlewares/log.middleware.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (!fs.existsSync(path.join(__dirname, "logs"))) {
  fs.mkdirSync(path.join(__dirname, "logs"));
}

// Global Middlewares
app.use(logMiddleware);

app.use("/api/v1/public", publicRoutes);
app.use("/api/v1/private", privateRoutes);

app.listen(PORT, () =>
  console.log(`app is listening on http://localhost:${PORT}`)
);
