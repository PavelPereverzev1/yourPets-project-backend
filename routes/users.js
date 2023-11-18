const express = require('express');
const {authenticate} = require('../middlewares');
// const schemas = require('../schemas/users');
const ctrl = require('../controllers/users');

const router = express.Router();

router.get('/current', authenticate, ctrl.getCurrentUser);

module.exports = router;