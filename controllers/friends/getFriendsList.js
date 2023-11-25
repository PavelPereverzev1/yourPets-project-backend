const { ctrlWrapper } = require("../../helpers");
const Friend = require("../../models/friend");

const getFriendsList = async (req, res) => {
  const friends = await Friend.find();
  res.status(200).json({ friends });
};

module.exports = {
  getFriendsList: ctrlWrapper(getFriendsList),
};
