const swaggerRouter = require('./swagger');
const authRouter = require('./auth');
const petRouter  = require('./petRoute');
const userRouter = require('./users');
const noticeRouter = require('./notices');

module.exports = {swaggerRouter, authRouter, petRouter, userRouter, noticeRouter};

