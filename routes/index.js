import { Router } from "express";
import root from "../controllers/index.js";

const router = Router();

router.get("/", root);

export default router;
