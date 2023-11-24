const Joi = require("joi");
// const CATEGORIES = require("../constants/noticeCategories");

const dateRegExp = /^\d{4}-\d{2}-\d{2}$/;

const addNoticeSchema = Joi.object({
  noticeType: Joi.string().required().empty(false),
  title: Joi.string().min(3).required().empty(false),
  name: Joi.string().min(3).required().empty(false),
  birthday: Joi.string().regex(dateRegExp).required().empty(false),
  petType: Joi.string().min(3).required().empty(false),
  sex: Joi.string().valid("male", "female").required().empty(false),
  location: Joi.string().min(3).required().empty(false),
  price: Joi.number(),
  comments: Joi.string().min(3).required(),
  photoURL: Joi.string().uri(),
  photoId: Joi.string(),
});

module.exports = { addNoticeSchema };
