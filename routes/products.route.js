const { Router } = require('express');

const {
  productsController,
} = require('../controllers/products.controller.');

const router = Router();

router.get('/', productsController.getProducts);
router.post('/', productsController.create);
router.delete('/:id', productsController.remove);
router.patch('/:id', productsController.edit);

module.exports = router;
