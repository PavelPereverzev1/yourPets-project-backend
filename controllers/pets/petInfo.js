const Pet = require("../../models/pets");
const { HttpError } = require("../../helpers");

const petInfo = async (req, res, next) => {
  const id = req.params.id;

  const petInfo = await Pet.findById(id);
  if (!petInfo) {
    throw HttpError(404, "Not Found");
  }
  res.json(petInfo);
};

module.exports = petInfo;
