const Pet = require("../../models/pets");

const petsList = async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 9;

  const pets = await Pet.find()
    .skip((page - 1) * limit)
    .limit(limit);
  res.json(pets);
};

module.exports = petsList;
