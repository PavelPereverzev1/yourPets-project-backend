const { ctrlWrapper } = require('../../helpers');
const getNoticeList = require("./getNoticeList");


module.exports = {getNoticeList:ctrlWrapper(getNoticeList)}