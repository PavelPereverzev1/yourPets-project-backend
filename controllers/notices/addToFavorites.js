const { HttpError } = require("../../helpers");
const Notice = require("../../models/notice.js");
const User = require("../../models/user.js");

const addToFavorites = async (req, res) => {
  const { noticeId } = req.params;
  const { _id: userId } = req.user;

  const result = await Notice.findByIdAndUpdate(noticeId, {
    $push: { favorite: userId },
  });

  if (!result) {
    throw HttpError(404, "Not found");
  }

  await User.findByIdAndUpdate(userId, {
    $push: { favorites: noticeId },
  });

  res.status(200).json({
    message: "Success",
  });
};

module.exports = addToFavorites;
