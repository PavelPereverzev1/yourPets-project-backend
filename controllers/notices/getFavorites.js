const Notice = require("../../models/notice.js");

const getFavorites = async (req, res) => {
  const { favorites } = req.user;
  const { page = 1, limit = 12, search = "" } = req.query;

  const result = [];
  for (const item of favorites) {
    const notice = await Notice.findById(item);
    result.push(notice);
  }
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

module.exports = getFavorites;
