const express = require('express');
const ctrl = require('../../controllers/contacts');
const { validateBody, isValidId, authenticate } = require('../../middlewares');
const schemas = require('../../schemas/contacts');

const router = express.Router();

router.get('/', authenticate, ctrl.getAll);

router.get('/:contactId', authenticate, isValidId, ctrl.getById);

router.post('/', authenticate, validateBody(schemas.add), ctrl.add);

router.delete('/:contactId', authenticate, isValidId, ctrl.deleteById);

router.put(
  '/:contactId',
  authenticate,
  isValidId,
  validateBody(schemas.update),
  ctrl.updateById
);

router.patch(
  '/:contactId/favorite',
  authenticate,
  isValidId,
  validateBody(schemas.updateFavorite),
  ctrl.updateFavorite
);

module.exports = router;
