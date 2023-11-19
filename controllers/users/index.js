const { ctrlWrapper } = require('../../helpers');
const getCurrentUser = require('./getCurrentUser');
const updateUserData = require('./updateUserData');

module.exports = {
    getCurrentUser:ctrlWrapper(getCurrentUser),
    updateUserData:ctrlWrapper(updateUserData),
}