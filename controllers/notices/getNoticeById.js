const Notice = require("../../models/notice.js");
const User = require("../../models/user.js");
const { HttpError } = require('../../helpers');

const getNoticeById = async (req , res) => {
    const {noticeId} = req.params;
    const result = await Notice.findById(noticeId);
    if (!result) {
        throw HttpError(404, 'Not found');
    }
    const { email, phone } = await User.findById(result.owner)

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
          ownerEmail: email,
          ownerPhone: phone,
        },
      });

};

module.exports = getNoticeById;


