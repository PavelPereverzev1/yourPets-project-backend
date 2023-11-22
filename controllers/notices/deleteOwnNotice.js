const Notice = require("../../models/notice.js");
const { HttpError, deleteFromCloudinary} = require('../../helpers');


const deleteOwnNotice = async (req, res) => {
    const {noticeId} = req.params;
    const { _id: owner } = req.user;
    const result = await Notice.findOneAndDelete({_id:noticeId, owner});
    if (!result) {
        throw HttpError(404, 'Not found');
    }
    await deleteFromCloudinary(result.photoId);

res.status(200).json({
    message:"Successfully deleted"
});
}


module.exports = deleteOwnNotice;