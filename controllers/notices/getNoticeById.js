const Notice = require("../../models/notice.js");
const { HttpError } = require("../../helpers");

const getNoticeById = async (req, res) => {
  const { noticeId } = req.params;
  const result = await Notice.findById(noticeId).populate("owner");

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json({
    notice: {
      _id: result._id,
      noticeType: result.noticeType,
      title: result.title,
      name: result.name,
      birthday: result.birthday,
      petType: result.petType,
      sex: result.sex,
      location: result.location,
      price: result.price,
      comments: result.comments,
      photoURL: result.photoURL,
      favorite: result.favorite,
      ownerEmail: result.owner.email,
      ownerPhone: result.owner.phone,
    },
  });
};

module.exports = getNoticeById;
