const User = require("../../models/user");
const bcrypt = require("bcrypt");
const { HttpError, generateJWT } = require("../../helpers");


const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email already in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = `${req.protocol}://${req.get('host')}/avatars/default_user.png`

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
  });

  const payload = {
    id: newUser._id,
  };
  
  const token = generateJWT(payload);
  await User.findByIdAndUpdate(newUser._id, { token });

  res.status(201).json({
    user: {
      email: newUser.email,
      name: newUser.name,
    },
    token,
  });
};

module.exports = register;
