const router = require('express').Router();
const repoRouter = require('./repoRoutes');

router.use('/repos', repoRouter);

module.exports = router;