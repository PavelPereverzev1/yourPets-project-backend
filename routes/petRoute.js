const express = require("express");
const { validateBody } = require("../middlewares");
const petSchema = require("../schemas/joiPetsSchema");
const { petList, addPet, deletePet, petInfo } = require("../controllers/pets");

const router = express.Router();

router.get("/", petList);
router.post("/", validateBody(petSchema), addPet);
router.get("/:id", petInfo);
router.delete("/:id", deletePet);
module.exports = router;
