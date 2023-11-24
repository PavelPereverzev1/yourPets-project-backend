const express = require("express");
const { validateBody, upload, updatePhoto } = require("../middlewares");
const petSchema = require("../schemas/joiPetsSchema");
const { petList, addPet, deletePet } = require("../controllers/pets");
const { authenticate } = require("../middlewares");

const router = express.Router();

router.get("/", authenticate, petList);
router.post(
  "/",
  authenticate,
  upload.single("photo"),
  updatePhoto,
  validateBody(petSchema),
  addPet
);
router.delete("/:id", authenticate, deletePet);

module.exports = router;
