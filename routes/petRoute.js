const express = require("express");
const { validateBody } = require("../middlewares");
const petSchema = require("../schemas/joiPetsSchema");
const { petList, addPet, deletePet } = require("../controllers/pets");
const { authenticate } = require("../middlewares");
const router = express.Router();

router.get("/", authenticate, petList);
router.post("/", authenticate, validateBody(petSchema), addPet);
router.delete("/:id", authenticate, deletePet);

module.exports = router;
