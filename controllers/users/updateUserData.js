const User = require("../../models/user");

const updateUserData = async (req, res) => {
  const { _id: userId } = req.user;

  const user = await User.findByIdAndUpdate(userId, { ...req.body });

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
};

module.exports = updateUserData;
