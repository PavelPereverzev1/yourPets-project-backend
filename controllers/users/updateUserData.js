const updateUserData = async (req, res) => {
  const { user } = req;
  console.log(req.body);
  Object.keys(req.body).forEach((key) => {
    user[key] = req.body[key];
  });

  await user.save();

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
