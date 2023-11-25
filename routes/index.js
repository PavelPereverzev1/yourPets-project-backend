const swaggerRouter = require("./swagger");
const authRouter = require("./auth");
const petRouter = require("./petRoute");
const userRouter = require("./users");
const noticeRouter = require("./notices");
const newsRouter = require("./news");
const friendsRouter = require("./friends");

module.exports = {
  swaggerRouter,
  authRouter,
  petRouter,
  userRouter,
  noticeRouter,
  newsRouter,
  friendsRouter,
};
