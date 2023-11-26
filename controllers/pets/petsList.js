const Pet = require("../../models/pets");

const petsList = async (req, res) => {
  const { _id: userId } = req.user;
  const pets = await Pet.find({
    owner: userId,
  });

  res.json(pets);
};

module.exports = petsList;
