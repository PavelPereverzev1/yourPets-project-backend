const express = require("express");
const ctrl = require("../controllers/notices");
const router = express.Router();

router.get("/", ctrl.getNoticeList)

module.exports = router;