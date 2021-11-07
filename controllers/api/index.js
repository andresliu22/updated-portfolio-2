const router = require('express').Router();
const repoRouter = require('./repoRoutes');
const skillRouter = require('./skillRoutes');

router.use('/repos', repoRouter);
router.use('/skills', skillRouter);

module.exports = router;