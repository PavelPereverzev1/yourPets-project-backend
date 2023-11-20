const Pet = require("../../models/pets");

const addPet = async (req, res, next) => {
  const user = req.user;
  console.log(req.body);
  const petData = {
    ...req.body,
    owner: user.id,
    ownerEmail: user.email,
    ownerPhone: user.phone,
  };
  const newPet = await Pet.create(petData);
  res.json(newPet);
};

module.exports = addPet;
