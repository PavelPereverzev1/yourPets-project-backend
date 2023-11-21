const { noticeFilter } = require("../../helpers");

const getNoticesList = async (req, res) => {
  const noticesList = await noticeFilter(req.query)

    const { page = 1, limit = 12 } = req.query;
    const skip = (page - 1) * limit;
    const noticesPage = noticesList.slice(skip, skip + limit);
  
    res.status(200).json({
      data: noticesPage,
      total: noticesList.length,
    });
};

module.exports = getNoticesList