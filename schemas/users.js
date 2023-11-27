const Joi = require("joi");

const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegExp = /^\+380\d{9}$/;
const dateRegExp = /^\d{4}-\d{2}-\d{2}$/;

const registerSchema = Joi.object({
  name: Joi.string().required().min(2).max(16).empty(false).messages({
    "string.base": "The name must be a string",
    "string.min": "The name must be not less 2 symbols",
    "string.max": "The name must be not more 16 symbols",
    "any.required": "The name field is required",
    "string.empty": "The name must not be empty",
  }),
  email: Joi.string()
    .pattern(emailRegExp)
    .required()
    .empty(false)
    .empty(false)
    .messages({
      "string.base": "The email must be a string",
      "string.pattern.base": "The email must be in format YYYY-MM-DD",
      "any.required": "The email field is required",
      "string.empty": "The email must not be empty",
    }),
  password: Joi.string().min(6).required().messages({
    "string.base": "The password must be a string",
    "string.min": "The city must be not less 6 symbols",
    "string.empty": "The city must not be empty",
  }),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegExp).required().empty(false).messages({
    "string.base": "The email must be a string",
    "string.pattern.base": "The email must be in format YYYY-MM-DD",
    "any.required": "The email field is required",
    "string.empty": "The email must not be empty",
  }),
  password: Joi.string().min(6).required().messages({
    "string.base": "The password must be a string",
    "string.min": "The city must be not less 6 symbols",
    "string.empty": "The city must not be empty",
  }),
});

const userUpdateSchema = Joi.object({
  name: Joi.string().min(2).max(16).empty(false).messages({
    "string.base": "The name must be a string",
    "string.min": "The name must be not less 2 symbols",
    "string.max": "The name must be not more 16 symbols",
    "any.required": "The name field is required",
    "string.empty": "The name must not be empty",
  }),
  email: Joi.string().pattern(emailRegExp).empty(false).messages({
    "string.base": "The email must be a string",
    "string.pattern.base": "The email must be in format YYYY-MM-DD",
    "any.required": "The email field is required",
    "string.empty": "The email must not be empty",
  }),
  birthday: Joi.string().regex(dateRegExp).empty(false).messages({
    "string.base": "The birthday must be a string",
    "string.pattern.base": "The birthday must be in format YYYY-MM-DD",
    "any.required": "The birthday field is required",
    "string.empty": "The birthday must not be empty",
  }),
  phone: Joi.string().regex(phoneRegExp).messages({
    "string.base": "The phone must be a string",
    "string.pattern.base": "The phone must be in format +380XXXXXXXXX",
  }),
  city: Joi.string().min(2).max(30).empty(false).messages({
    "string.base": "The city must be a string",
    "string.min": "The city must be not less 2 symbols",
    "string.max": "The city must be not more 16 symbols",
    "string.empty": "The city must not be empty",
  }),
  avatarURL: Joi.string().uri().empty(false),
  avatarId: Joi.string(),
});

module.exports = {
  registerSchema,
  loginSchema,
  userUpdateSchema,
};
