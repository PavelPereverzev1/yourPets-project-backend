const Pet = require("../../models/pets");

const addPet = async (req, res, next) => {
  const newPet = await Pet.create(req.body);
  res.json(newPet);
};

module.exports = addPet;
