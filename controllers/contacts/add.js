const Contact = require('../../models/contact');

const add = async (req, res) => {
  const { _id: owner } = req.user;
  res.status(201).json(await Contact.create({ ...req.body, owner }));
};

module.exports = add;
