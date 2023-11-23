const { HttpError } = require("../../helpers");
const Notice = require("../../models/notice.js");
const User = require("../../models/user.js");

const deleteFromFavorites = async (req, res) => {
  const { noticeId } = req.params;
  const { _id: userId } = req.user;

  await User.findByIdAndUpdate(userId, {
    $pull: { favorites: noticeId },
  });

  const result = await Notice.findByIdAndUpdate(noticeId, {
    $pull: { favorite: userId },
  });

  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json({
    message: "Successfully deleted",
  });
};

module.exports = deleteFromFavorites;
