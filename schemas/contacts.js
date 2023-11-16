const Joi = require('joi');

const add = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
  owner: Joi.string(),
});

const update = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
  favorite: Joi.boolean(),
}).or('name', 'email', 'phone', 'favorite');

const updateFavorite = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = { add, update, updateFavorite };
