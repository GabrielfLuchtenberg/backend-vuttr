import { Router } from "express";
import { TagController } from "../controllers/tag-controller";
// import AuthController from "../controllers/AuthController";
// import { checkJwt } from "../middlewares/checkJwt";

const router = Router();
router.get("/", TagController.list);
router.post("/", TagController.create);
// routes.post("/login", AuthController.login);

// routes.post("/change-password", [checkJwt], AuthController.changePassword);

export default router;
