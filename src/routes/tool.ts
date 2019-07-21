import { Router } from "express";
import { ToolController } from "../controllers/tool-controller";

const router = Router();
router.get("/", ToolController.list);
router.post("/", ToolController.create);
router.delete("/:id([0-9]+)", ToolController.delete);

export default router;
