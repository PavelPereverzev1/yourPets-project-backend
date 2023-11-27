const User = require("../../models/user");
const { HttpError } = require("../../helpers");

const updateUserData = async (req, res) => {
  try {
    const { _id: userId } = req.user;
    const user = await User.findByIdAndUpdate(
      userId,
      { ...req.body },
      { new: true }
    );
    res.status(200).json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        birthday: user.birthday,
        city: user.city,
        avatarURL: user.avatarURL,
      },
    });
  } catch (error) {
    throw HttpError(400, "Email already in use");
  }
};

module.exports = updateUserData;
