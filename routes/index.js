import { Router } from "express";
import root from "../controllers/index.js";
import contactRoutes from "./contacts.js";

const router = Router();

router.get("/", root);
router.use(contactRoutes);

export default router;
