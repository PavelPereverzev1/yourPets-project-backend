const Joi = require("joi");
const CATEGORIES = require("../constants/noticeCategories");

const dateRegExp = /^\d{4}-\d{2}-\d{2}$/;

const addNoticeSchema = Joi.object({
  noticeType: Joi.string()
    .valid(...CATEGORIES)
    .required()
    .empty(false)
    .messages({
      "string.base": "The noticeType must be a string",
      "any.only":
        'The noticeType must be the one of "sell", "lost-or-found" or "in-good-hands"',
      "any.required": "The noticeType field is required",
      "string.empty": "The noticeType must not be empty",
    }),
  title: Joi.string().min(3).required().empty(false).messages({
    "string.base": "The title must be a string",
    "string.min": "The title must be not less 3 symbols",
    "any.required": "The title field is required",
    "string.empty": "The title must not be empty",
  }),
  name: Joi.string().min(3).required().empty(false).messages({
    "string.base": "The name must be a string",
    "string.min": "The name must be not less 3 symbols",
    "any.required": "The name field is required",
    "string.empty": "The name must not be empty",
  }),
  birthday: Joi.string().regex(dateRegExp).required().empty(false).messages({
    "string.base": "The birthday must be a string",
    "string.pattern.base": "The birthday must be in format YYYY-MM-DD",
    "any.required": "The birthday field is required",
    "string.empty": "The birthday must not be empty",
  }),
  petType: Joi.string().min(3).required().empty(false).messages({
    "string.base": "The petType must be a string",
    "string.min": "The petType must be not less 3 symbols",
    "any.required": "The petType field is required",
    "string.empty": "The petType must not be empty",
  }),
  sex: Joi.string().valid("male", "female").required().empty(false).messages({
    "string.base": "The sex must be a string",
    "any.only": 'The sex must be the one of "male" or "female"',
    "any.required": "The sex field is required",
    "string.empty": "The sex must not be empty",
  }),
  location: Joi.string().min(3).required().empty(false).messages({
    "string.base": "The name must be a string",
    "any.required": "The name field is required",
    "string.empty": "The name must not be empty",
    "string.min": "The name must be not less 3 symbols",
  }),
  price: Joi.number().messages({
    "number.base": "The price must be a number",
  }),
  comments: Joi.string().min(3).required().messages({
    "string.base": "The comments must be a string",
    "string.min": "The comments must be not less 3 symbols",
    "any.required": "The comments field is required",
    "string.empty": "The comments must not be empty",
  }),
  photoURL: Joi.string().uri().required().messages({
    "any.required": "The photo field is required",
  }),
  photoId: Joi.string(),
});

module.exports = { addNoticeSchema };
