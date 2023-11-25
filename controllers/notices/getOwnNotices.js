const Notice = require("../../models/notice.js");

const getOwnNotices = async (req, res) => {
  const { page = 1, limit = 12, search = "" } = req.query;
  const { _id: owner } = req.user;

  const result = await Notice.find({ owner }, "-createdAt -updatedAt");

  const searchResult = result.filter((item) =>
    item.title.toLowerCase().includes(search.trim().toLowerCase())
  );
  const skip = (page - 1) * limit;
  const resultPage = searchResult.slice(skip, skip + limit);

  res.status(200).json({
    data: resultPage,
    total: result.length,
  });
};

module.exports = getOwnNotices;
