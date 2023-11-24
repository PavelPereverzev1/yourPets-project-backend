const mongoose = require("mongoose");
const Pet = require("../../models/pets");
// const { HttpError } = require("../../helpers");

const petsList = async (req, res, next) => {
  const userId = new mongoose.Types.ObjectId(req.user._id);
  const pets = await Pet.find({
    owner: userId,
  });

  // if (!pets) {
  //   throw HttpError(404, "Not found");
  // }

  res.json(pets);
};

module.exports = petsList;
