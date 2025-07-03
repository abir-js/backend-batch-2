import express from "express";
import dotenv from "dotenv";

import publicRoutes from "./routers/public.routes.js"
import privateRoutes from "./routers/private.routes.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use("/api/v1/public", publicRoutes)
app.use("/api/v1/private", privateRoutes)

app.listen(PORT, () => console.log(`app is listening on http://localhost:${PORT}`));
