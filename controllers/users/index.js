const { ctrlWrapper } = require('../../helpers');
const getCurrentUser = require('./getCurrentUser');

module.exports = {
    getCurrentUser:ctrlWrapper(getCurrentUser),
}