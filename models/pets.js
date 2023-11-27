const { Schema, model } = require("mongoose");
const Joi = require("joi").extend(require("@joi/date"));

const validateDate = (value) => {
  const { error } = Joi.date().format("DD-MM-YYYY").validate(value);
  return !error;
};

const petSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Pet name must be provided"],
    },
    birthday: {
      type: Date,
      validate: {
        validator: validateDate,
        message: "Invalid date format (dd-mm-yyyy)",
      },
    },
    petType: {
      type: String,
      required: [true, "Type must be provided"],
    },
    comments: {
      type: String,
    },
    photoURL: {
      type: String,
    },
    photoId: {
      type: String,
      default: null,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

const Pet = model("pet", petSchema);

module.exports = Pet;
