const Pet = require("../../models/pets");
const { HttpError } = require("../../helpers");

const deletePet = async (req, res, next) => {
  const id = req.params.id;
  const ownerId = req.user._id;
  const result = await Pet.findOneAndDelete({ _id: id, owner: ownerId });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({
    message: "Pet deleted",
  });
};

module.exports = deletePet;
