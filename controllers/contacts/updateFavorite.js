const Contact = require('../../models/contact');
const { HttpError } = require('../../helpers');

const updateFavorite = async (req, res) => {
  const id = req.params.contactId;
  const { _id: owner } = req.user;
  const contact = await Contact.findOneAndUpdate(
    { _id: id, owner: owner },
    req.body,
    { new: true }
  );
  if (!contact) {
    throw HttpError(404, 'Not found');
  }
  res.json(contact);
};

module.exports = updateFavorite;
