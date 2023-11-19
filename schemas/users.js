const Joi = require('joi');

const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegExp = /^\+380\d{9}$/;
const dateRegExp = /^\d{4}-\d{2}-\d{2}$/;

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegExp).required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegExp).required(),
  password: Joi.string().min(6).required(),
});

const userUpdateSchema = Joi.object({
  name: Joi.string().min(2).max(16).empty(false),
  birthday: Joi.string().regex(dateRegExp),
  phone: Joi.string().regex(phoneRegExp),
  city: Joi.string().min(2).max(30).empty(false),
  avatarURL: Joi.string().uri(),
  avatarId: Joi.string(),
})

module.exports = {
  registerSchema,
  loginSchema,
  userUpdateSchema,
};
