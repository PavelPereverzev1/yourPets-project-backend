const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const dateRegex = /^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-\d{4}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const petSchema = new Schema({
  name: {
    type: String,
    required: [true, "Pet name must be provided"],
  },
  birthday: {
    type: Date,
    validate: dateRegex,
  },
  type: {
    type: String,
    required: [true, "Type must be provided"],
  },
  avatarUrl: {
    type: String,
    default: null,
  },
  sex: {
    type: String,
    enum: ["male", "female"],
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  ownerEmail: {
    type: String,
    validate: emailRegex,
  },
  ownerPhone: {
    type: String,
  },
  discription: {
    type: String,
  },
  sellInfor: {
    type: String,
    enum: ["sell", "in good hands", "lost/found"],
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});

petsSchema.post("save", handleMongooseError);

const Pet = model("pet", petSchema);

module.exports = Pet;
