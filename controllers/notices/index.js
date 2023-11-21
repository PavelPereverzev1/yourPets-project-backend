const { ctrlWrapper } = require("../../helpers");
const getNoticesList = require("./getNoticeList");
const addNotice = require("./addNotice");
const getNoticeById = require("./getNoticeById");
const getOwnNotices = require("./getOwnNotices");

module.exports = {
  getNoticesList: ctrlWrapper(getNoticesList),
  addNotice: ctrlWrapper(addNotice),
  getNoticeById: ctrlWrapper(getNoticeById),
  getOwnNotices: ctrlWrapper(getOwnNotices),
};
