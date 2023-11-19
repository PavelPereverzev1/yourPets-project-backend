const Pet = require("../../models/pets");
const { HttpError } = require("../../helpers");

const deletePet = async (req, res, next) => {
  const id = req.params.id;
  console.log(req.user);
  const ownerId = req.user._id;
  const pet = await Pet.findById(id);
  if (!pet) {
    throw HttpError(404, "Pet not found");
  }
  console.log(pet.owner, "OwnerId", ownerId, "from auth");
  if (pet.owner !== ownerId) {
    throw HttpError(401, "not authorized to delete");
  }
  await Pet.findByIdAndDelete(id);

  res.status(204).json({ message: "Pet deleted" });
};

module.exports = deletePet;
