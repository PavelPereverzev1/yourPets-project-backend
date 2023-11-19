const express = require('express');
const {authenticate, validateBody,upload} = require('../middlewares');
const schemas = require('../schemas/users');
const ctrl = require('../controllers/users');

const router = express.Router();

router.get('/current', authenticate, ctrl.getCurrentUser);
// TODO роут для оновлення
router.patch('/', authenticate, validateBody(schemas.userUdateSchema), upload.single('avatar'), usersMdwr.updateImage, usersMdwr.checkUpdateData, usersCtrl.updateUserData)

module.exports = router;