const express = require('express');
const { validateBody, authenticate, upload } = require('../../middlewares');
const schemas = require('../../schemas/users');
const ctrl = require('../../controllers/users');

const router = express.Router();

router.post('/register', validateBody(schemas.registerSchema), ctrl.register);
