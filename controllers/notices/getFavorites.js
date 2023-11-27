const favoriteFilter = require("../../helpers/favoriteFilter.js");
const Notice = require("../../models/notice.js");

const getFavorites = async (req, res) => {
  const { _id: userId } = req.user;

  const result = await Notice.find({ favorite: userId });

  const resultPage = favoriteFilter(req.query, result);

  res.status(200).json({
    data: resultPage,
    total: result.length,
  });
};

module.exports = getFavorites;
