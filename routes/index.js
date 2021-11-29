const { Router } = require('express');

const router = Router();

router.use('/categpries', require('./categories.route'));
router.use('/products', require('./products.route'));
router.use('/tables', require('./tables.route'));
router.use('/users', require('./users.route'))

module.exports = router;
