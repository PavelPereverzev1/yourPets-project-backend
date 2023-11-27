const { Schema, model } = require("mongoose");

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

const Friend = model("Friend", friendSchema);

module.exports = Friend;
