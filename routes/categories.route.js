const { Router } = require('express');

const {
  categoriesController,
} = require('../controllers/categories.controller');

const router = Router();

router.get('/', categoriesController.getCategories);
router.post('/', categoriesController.createCategory);
router.delete('/:id', categoriesController.removeCategory);
router.patch('/:id', categoriesController.editCategory);

module.exports = router;
