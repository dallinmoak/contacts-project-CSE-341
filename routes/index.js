import { Router } from "express";
import root from "../controllers/index.js";
import contactRoutes from "./contacts.js";
import apiDocsRoutes from "./apiDocs.js";

const router = Router();

router.get("/", (req, res) => {
  // #swagger.ignore = true
  root(req, res);
});
router.use(contactRoutes);
router.use("/api-docs", (req, res) => {
  // #swagger.ignore = true
  apiDocsRoutes(req, res);
});

export default router;
