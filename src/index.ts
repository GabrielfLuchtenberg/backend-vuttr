import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import { createConnection } from "typeorm";
import { routes } from "./routes/routes";
import * as swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "../swagger.json";

createConnection()
  .then(async () => {
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    app.use("/", routes);
    app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.listen(4000, () => {
      console.log("Server started at http://localhost:4000");
    });
  })
  .catch(error => console.log(error));
