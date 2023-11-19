const Pet = require("../../models/pets");
const { HttpError } = require("../../helpers");

const deletePet = async (req, res, next) => {
  const id = req.params.id;
  const removedContact = await Pet.findByIdAndDelete(id);
  if (!removedContact) {
    throw HttpError(404, "Contact not found");
  }
  res.status(204).json({ message: "Contact deleted" });
};

module.exports = deletePet;
