const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

const router = express.Router();

const options = {
  explorer: true,
};

router.use("/", swaggerUi.serve);
router.get("/", swaggerUi.setup(swaggerDocument, options));

module.exports = router;
