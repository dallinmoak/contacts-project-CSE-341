import { createRequire } from "module";
import { Router } from "express";
import * as swaggerUi from "swagger-ui-express";

const apiDocsRoutes = Router();
const require = createRequire(import.meta.url);
const swaggerFile = require("../swagger.json");

apiDocsRoutes.use("/", swaggerUi.serve);
apiDocsRoutes.get("/", swaggerUi.setup(swaggerFile));

export default apiDocsRoutes;
