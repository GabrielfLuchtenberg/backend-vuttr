import { Router } from "express";
import tag from "./tag";

const routes = Router();

routes.use("/tags", tag);

export { routes };
