import express from "express";

import indexRoutes from "./routes/index.routes.js";
import questionsRoutes from "./routes/questions.routes.js";

const app = express();

app.use(express.json());

app.use(indexRoutes);
app.use(questionsRoutes);

export default app;
