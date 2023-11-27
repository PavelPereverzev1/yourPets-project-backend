const Joi = require("joi");

const dateRegExp = /^\d{4}-\d{2}-\d{2}$/;

const petSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "Pet name must be provided",
  }),
  birthday: Joi.string().regex(dateRegExp).required().empty(false).messages({
    "string.base": "The birthday must be a string",
    "any.required": "The birthday field is required",
    "string.empty": "The birthday must not be empty",
    "string.pattern.base": "The birthday must be in format YYYY-MM-DD",
  }),
  petType: Joi.string().required().messages({
    "string.base": "The birthday must be a string",
    "any.required": "Type must be provided",
  }),
  comments: Joi.string().empty(""),
  photoId: Joi.string(),
  photoURL: Joi.string().required(),
  owner: Joi.string(),
});

module.exports = petSchema;
