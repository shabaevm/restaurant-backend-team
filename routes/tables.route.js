const { Router } = require('express');

const {
  tablesController,
} = require('../controllers/tables.controller');

const router = Router();

// router.get('/', tablesController.getTables);
// router.post('/', tablesController.create);
// router.delete('/:id', tablesController.remove);
// router.patch('/:id', tablesController.edit);

module.exports = router;
