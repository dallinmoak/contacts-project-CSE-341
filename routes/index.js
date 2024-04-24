import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Frank Herbert");
});

export default router;
