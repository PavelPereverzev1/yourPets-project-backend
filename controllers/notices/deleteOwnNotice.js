const Notice = require("../../models/notice.js");
const User = require("../../models/user.js");
const { HttpError, deleteFromCloudinary } = require("../../helpers");

const deleteOwnNotice = async (req, res) => {
  const { noticeId } = req.params;
  const { _id: owner } = req.user;
  const result = await Notice.findOneAndDelete({ _id: noticeId, owner });
  if (!result) {
    throw HttpError(404, "Not found");
  }

  await deleteFromCloudinary(result.photoId);
  for (const userId of result.favorite) {
    await User.findByIdAndUpdate(userId, {
      $pull: { favorites: noticeId },
    });
  }
  res.status(200).json({
    message: "Successfully deleted",
  });
};

module.exports = deleteOwnNotice;
