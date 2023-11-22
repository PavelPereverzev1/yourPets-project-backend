const Notice = require("../../models/notice.js");

const getFavorites = async (req, res) => {
  const { favorites } = req.user;
  const result = [];
  for (const item of favorites) {
    const notice = await Notice.findById(item);
    result.push(notice);
    console.log(notice);
  }
  const { page = 1, limit = 12 } = req.query;
  const skip = (page - 1) * limit;
  const resultPage = result.slice(skip, skip + limit);

  res.status(200).json({
    data: resultPage,
    total: result.length,
  });
};

module.exports = getFavorites;
