import { Router } from "express";
import { getAll } from "../controller/board.controller.js";

const router = Router();

router.get('/', getAll);

export default router;