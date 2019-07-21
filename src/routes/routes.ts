import { Router } from "express";
import tool from "./tool";

const routes = Router();

routes.use("/tools", tool);

export { routes };
