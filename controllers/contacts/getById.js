const Contact = require('../../models/contact');
const { HttpError } = require('../../helpers');

const getById = async (req, res) => {
  const id = req.params.contactId;
  const { _id: owner } = req.user;
  const contact = await Contact.findOne(
    { _id: id, owner: owner },
    '-createdAt -updatedAt'
  );
  if (!contact) {
    throw HttpError(404, 'Not found');
  }
  res.json(contact);
};

module.exports = getById;
