const { noticeFilter } = require("../../helpers");

const getNoticeList = async (req, res) => {
  const noticesList = await noticeFilter(req.query)

    const { page = 1, limit = 12 } = req.query;
    const skip = (page - 1) * limit;
    const paginatedNotices = noticesList.slice(skip, skip + limit);
  
    res.json({
      data: paginatedNotices,
      total: noticesList.length,
    });
};

module.exports = getNoticeList