const Joi = require("joi");

const dateRegExp = /^\d{2}-\d{2}-\d{4}$/;

const petSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "Pet name must be provided",
  }),
  birthday: Joi.string().regex(dateRegExp).required().empty(false),
  petType: Joi.string().required().messages({
    "any.required": "Type must be provided",
  }),
  comments: Joi.string().empty(""),
  photoId: Joi.string(),
  photoURL: Joi.string().required(),
  owner: Joi.string(),
});

module.exports = petSchema;
