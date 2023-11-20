 const authenticate = require('./authenticate');
 const validateBody = require('./validateBody');
 const upload = require('./uploadTmp');
 const updateImage = require('./updateImageInStorage');
 const updatePhoto = require('./updatePhotoInStorage');

 module.exports = { authenticate, validateBody, upload, updateImage, updatePhoto };