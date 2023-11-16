const User = require('../../models/user');
const { HttpError, sendEmail } = require('../../helpers');
require('dotenv').config();

const { BASE_URL } = process.env;

const resendVerifyEmail = async (req, res) => {
  const { email } = req.email;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, 'Email not found');
  }
  if (user.verify) {
    throw HttpError(400, 'Verification has already been passed');
  }

  const verifyEmail = {
    to: email,
    subject: 'Verify Email',
    html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${user.verificationToken}">Click veryfy Email</a>`,
  };

  await sendEmail(verifyEmail);

  res.json({
    message: 'Verification email sent',
  });
};

module.exports = resendVerifyEmail;
