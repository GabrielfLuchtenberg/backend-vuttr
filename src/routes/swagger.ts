import { Router } from "express";
import * as swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "../../swagger.json";

const router = Router();

router.get("/", swaggerUi.serve);
swaggerUi.setup(swaggerDocument);

export default router;
