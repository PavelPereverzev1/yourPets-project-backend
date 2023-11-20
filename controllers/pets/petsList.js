const mongoose = require("mongoose");
const Pet = require("../../models/pets");

const petsList = async (req, res, next) => {
  const userId = new mongoose.Types.ObjectId(req.user._id);
  const pets = await Pet.find({
    owner: userId,
  });

  if (pets.length === 0) {
    return res.status(404).json({ message: "No pets" });
  }
  res.json(pets);
};

module.exports = petsList;
