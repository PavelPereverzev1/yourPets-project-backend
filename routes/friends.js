const express = require("express");
const { getFriendsList } = require("../controllers/friends/getFriendsList.js");

const friendsRouter = express.Router();

friendsRouter.get("/", getFriendsList);

module.exports = friendsRouter;
