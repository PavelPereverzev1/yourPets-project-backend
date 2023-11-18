const petsList = require("./petsList");
const addPet = require("./addPet");
const deletePet = require("./deletePet");
const petInfo = require("./petInfo");

const { ctrlWrapper } = require("../../helpers");

module.exports = {
  petList: ctrlWrapper(petsList),
  addPet: ctrlWrapper(addPet),
  deletePet: ctrlWrapper(deletePet),
  petInfo: ctrlWrapper(petInfo),
};
