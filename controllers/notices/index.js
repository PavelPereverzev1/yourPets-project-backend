const { ctrlWrapper } = require("../../helpers");
const getNoticesList = require("./getNoticeList");
const addNotice = require("./addNotice");
const getNoticeById = require("./getNoticeById");

module.exports = {
  getNoticesList: ctrlWrapper(getNoticesList),
  addNotice: ctrlWrapper(addNotice),
  getNoticeById: ctrlWrapper(getNoticeById),
};
