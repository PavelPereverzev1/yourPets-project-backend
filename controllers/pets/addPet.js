const Pet = require("../../models/pets");

const addPet = async (req, res, next) => {
  await Pet.create({ ...req.body, owner: req.user.id });

  res.status(201).json({
    message: "Successfull operation",
  });
};

module.exports = addPet;
