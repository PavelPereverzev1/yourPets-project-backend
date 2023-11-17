const express = require('express');
const { validateBody } = require('../middlewares');
const schemas = require('../schemas/users');
const ctrl = require('../controllers/auth');

const router = express.Router();

router.post('/register', validateBody(schemas.registerSchema), ctrl.register);

module.exports = router;