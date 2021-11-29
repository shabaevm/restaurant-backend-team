const { Router } = require('express');

const {
  usersController,
} = require('../controllers/users.controller');

const router = Router();

router.get('/', usersController.getUsers);
router.post('/', usersController.create);
router.delete('/:id', usersController.remove);
router.patch('/:id', usersController.edit);

module.exports = router;
