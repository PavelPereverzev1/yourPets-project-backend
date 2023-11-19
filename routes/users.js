const express = require("express");
const {
  authenticate,
  validateBody,
  upload,
  updateImage,
} = require("../middlewares");
const schemas = require("../schemas/users");
const ctrl = require("../controllers/users");

const router = express.Router();

router.get("/current", authenticate, ctrl.getCurrentUser);

router.patch(
  "/",
  authenticate,
  upload.single("avatar"),
  updateImage,
  validateBody(schemas.userUpdateSchema),
  ctrl.updateUserData
);

module.exports = router;
