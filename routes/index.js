const router = require('express').Router();

router.get('/', (req, res) => {res.send('Hello World');});
router.use('/contacts', require('./contacts'));
router.use('/', require('./swagger'));

module.exports = router;