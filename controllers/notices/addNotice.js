const Notice = require("../../models/notice.js");
const addNotice = async (req, res) => {
    await Notice.create({ ...req.body, owner: req.user.id });

  res.status(201).json({
    message: "Notice created successfully",
  });
};


module.exports = addNotice