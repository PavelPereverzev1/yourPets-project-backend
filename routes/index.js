const swaggerRouter = require('./swagger');
const authRouter = require('./auth');
const petRouter  = require('./petRoute');
const userRouter = require('./users');

module.exports = {swaggerRouter, authRouter, petRouter, userRouter};