const express = require("express");
const ctrl = require("../controllers/notices");
const schemas = require("../schemas/notices");
const {
  validateBody,
  authenticate,
  upload,
  updatePhoto,
} = require("../middlewares");

const router = express.Router();

router.get("/", ctrl.getNoticesList);

router.post(
  "/",
  authenticate,
  upload.single("photo"),
  updatePhoto,
  validateBody(schemas.addNoticeSchema),
  ctrl.addNotice
);

module.exports = router;
