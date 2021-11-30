const { Router } = require('express');

const { tablesController } = require('../controllers/tables.controller');

const router = Router();

router.get('/', tablesController.getTables);
router.post('/', tablesController.createTable);
router.delete('/:id', tablesController.removeTable);
router.patch('/:id', tablesController.editTable);

module.exports = router;
