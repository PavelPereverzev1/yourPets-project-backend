const dateFns = require("date-fns");

const favoriteFilter = (prams, noticeArray) => {
  const { page = 1, limit = 12, search = "" } = prams;

  let searchResult = [];
  if (search) {
    searchResult = noticeArray.filter((item) =>
      item.title.toLowerCase().includes(search.trim().toLowerCase())
    );
  } else {
    searchResult = noticeArray;
  }

  const skip = (page - 1) * limit;
  const resultPage = searchResult.slice(skip, skip + limit);

  const result = resultPage.map((notice) => {
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

  return result;
};

module.exports = favoriteFilter;
