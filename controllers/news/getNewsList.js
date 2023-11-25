const News = require("../../models/news");

const getNews = async (req, res) => {
  const { page = 1, limit = 6, search } = req.query;
  const skip = (page - 1) * limit;

  const getNews = await News.find();

  const searchResult = getNews.filter((item) =>
    item.title.toLowerCase().includes(search.trim().toLowerCase())
  );

  const getSortResult = searchResult.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const pagedResult = getSortResult.slice(skip, skip + limit);

  res.status(200).json({
    data: pagedResult,
    total: searchResult.length,
  });
};

module.exports = {
  getNews,
};
