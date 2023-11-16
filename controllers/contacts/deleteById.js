const Contact = require('../../models/contact');
const { HttpError } = require('../../helpers');

const deleteById = async (req, res) => {
  const id = req.params.contactId;
  const { _id: owner } = req.user;
  const contact = await Contact.findOneAndDelete({ _id: id, owner: owner });
  if (!contact) {
    throw HttpError(404, 'Not found');
  }
  res.json({ message: 'Contact deleted' });
};

module.exports = deleteById;
