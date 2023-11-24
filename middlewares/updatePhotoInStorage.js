const { uploadCloudinary, deleteFromCloudinary } = require("../helpers");
const fs = require("fs/promises");

const updatePhoto = async (req, res, next) => {
  if (req.file) {
    const { path: tempUpload } = req.file;
    const { photoId: oldID } = req.body;

    if (oldID) {
      await deleteFromCloudinary(oldID);
    }
    const { secure_url: photoURL, public_id: photoId } = await uploadCloudinary(
      tempUpload
    );

    await fs.rm(tempUpload);

    req.body.photoURL = photoURL;
    req.body.photoId = photoId;
  }
  next();
};

module.exports = updatePhoto;
