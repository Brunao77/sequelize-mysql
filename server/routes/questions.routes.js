import { Router } from "express";

import {
  getQuestions,
  createQuestion,
} from "../controllers/questions.controllers.js";

const router = Router();

router.get("/questions", getQuestions);

router.put("/questions/:id", createQuestion);

export default router;
