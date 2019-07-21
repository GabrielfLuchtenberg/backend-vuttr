import { Router } from "express";
import test from "./test";

const routes = Router();

routes.use("/t", test);

export { routes };
