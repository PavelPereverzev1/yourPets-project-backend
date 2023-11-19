const Joi = require("joi").extend(require("@joi/date"));

const petSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "Pet name must be provided",
  }),
  birthday: Joi.date().format("DD-MM-YYYY").messages({
    "date.format": "Invalid date format (dd-mm-yyyy)",
  }),
  type: Joi.string().required().messages({
    "any.required": "Type must be provided",
  }),
  photoId: Joi.string(),
  petPhoto: Joi.string().allow(null),
  sex: Joi.string().valid("male", "female"),
  owner: Joi.string(),
  ownerEmail: Joi.string().email().messages({
    "string.email": "Invalid email address",
  }),
  ownerPhone: Joi.string(),
  discription: Joi.string(),
});

module.exports = petSchema;
