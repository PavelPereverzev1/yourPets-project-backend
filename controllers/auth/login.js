const User = require('../../models/user');
const bcrypt = require('bcrypt');
const { HttpError, generateJWT } = require('../../helpers');

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(401, 'Email or password is wrong');
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, 'Email or password is wrong');
  }

  const payload = {
    id: user._id,
  };
  const token = generateJWT(payload);
  await User.findByIdAndUpdate(user._id, { token });
  res.json({
    user: {
        email: user.email,
        name: user.name,
      },
    token,
  });
};

module.exports = login;