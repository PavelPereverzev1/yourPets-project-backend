const getCurrent = async (req, res) => {
  const { user } = req;

  res.json({
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      birthday: user.birthday,
      city: user.city,
      avatarURL: user.avatarURL,
      favorites: user.favorites,
    },
  });
};

module.exports = getCurrent;
