const {
  uploadCloudinary,
  deleteFromCloudinary,
} = require("../helpers");
const fs = require("fs/promises");

const updateImage = async (req, res, next) => {
  console.log(req.body);
  if (req.file) {
    const { path: tempUpload } = req.file;
    const { avatarId: oldID } = req.user;

    if (oldID) {
      await deleteFromCloudinary(oldID);
    }
    const { secure_url: avatarURL, public_id: avatarId } =
      await uploadCloudinary(tempUpload);

    await fs.rm(tempUpload);

    req.body.avatarURL = avatarURL;
    req.body.avatarId = avatarId;
  }
  next();
};

module.exports = updateImage;
