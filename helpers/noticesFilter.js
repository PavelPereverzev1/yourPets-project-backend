const Notice = require("../models/notice.js");
const dateFns = require("date-fns");
const CATEGORIES = require("../constants/noticeCategories.js");

const noticeFilter = async (query) => {
  const { category = "sell", search } = query;
  let noticesList = [];
  if (CATEGORIES.includes(category)) {
    noticesList = await Notice.find({ noticeType: category })
      .sort("-createdAt")
      .lean();
  }
  if (search) {
    noticesList = noticesList.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }
  noticesList = noticesList.map((notice) => {
    const age = dateFns.differenceInYears(
      new Date(),
      new Date(notice.birthday)
    );
    return {
      _id: notice._id,
      noticeType: notice.noticeType,
      title: notice.title,
      sex: notice.sex,
      location: notice.location,
      photoURL: notice.photoURL,
      age,
      category: notice.category,
      favorite: notice.favorite,
      owner: notice.owner,
    };
  });
  return noticesList;
};

module.exports = noticeFilter;
