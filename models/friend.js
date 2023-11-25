const { Schema, model } = require("mongoose");
const handleMongooseError = require("../helpers/handleMongooseError");

const friendSchema = new Schema({
  title: String,
  url: String,
  addressUrl: String,
  imageUrl: String,
  address: String,
  workDays: [{ isOpen: Boolean, from: String, to: String }],
  phone: String,
  email: String,
});

friendSchema.post("save", handleMongooseError);

const Friend = model("Friend", friendSchema);

module.exports = Friend;
