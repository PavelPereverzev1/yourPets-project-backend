const Notice = require("../../models/notice.js");

const getOwnNotices = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 12 } = req.query;
  const skip = (page - 1) * limit;
  res.status(200).json(
    await Notice.find({owner}, "-createdAt -updatedAt", {
      skip,
      limit,
    })
  );
};

module.exports = getOwnNotices;