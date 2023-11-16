const Contact = require('../../models/contact');

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, favorite = false } = req.query;
  const filter = favorite ? { owner, favorite } : { owner };
  const skip = (page - 1) * limit;
  res.status(200).json(
    await Contact.find(filter, '-createdAt -updatedAt', {
      skip,
      limit,
    })
  );
};

module.exports = getAll;
