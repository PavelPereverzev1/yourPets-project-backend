const Notice = require("../../models/notice.js");
const { favoriteFilter } = require("../../helpers");

const getOwnNotices = async (req, res) => {
  const { _id: owner } = req.user;

  const result = await Notice.find({ owner }, "-createdAt -updatedAt");

  const resultPage = favoriteFilter(req.query, result);

  res.status(200).json({
    data: resultPage,
    total: result.length,
  });
};

module.exports = getOwnNotices;
