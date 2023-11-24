const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi").extend(require("@joi/date"));

// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
    type: {
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

petSchema.post("save", handleMongooseError);

const Pet = model("pet", petSchema);

module.exports = Pet;
