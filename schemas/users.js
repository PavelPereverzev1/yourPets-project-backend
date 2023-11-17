const Joi = require('joi');
const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const registerSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().pattern(emailRegExp).required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegExp).required(),
  password: Joi.string().min(6).required(),
});

const subscriptionShema = Joi.object({
  subscription: Joi.string().only().allow('starter', 'pro', 'business'),
});

const emailSchema = Joi.object({
  email: Joi.string().pattern(emailRegExp).required(),
});

module.exports = {
  registerSchema,
  loginSchema,
  subscriptionShema,
  emailSchema,
};
