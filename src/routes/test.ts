import { Router } from "express";
// import AuthController from "../controllers/AuthController";
// import { checkJwt } from "../middlewares/checkJwt";

const router = Router();
router.get("/t", () => console.log("test worked"));
// routes.post("/login", AuthController.login);

// routes.post("/change-password", [checkJwt], AuthController.changePassword);

export default router;
