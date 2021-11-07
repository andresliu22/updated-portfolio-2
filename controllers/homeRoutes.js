const router = require('express').Router();
const Repo = require('../models/Repo');

router.get('/', async (req, res) => {
    try {
        const repoData = await Repo.findAll()
        const repos = repoData.map(repo => repo.get({ plain: true }));
        res.render('home', { repos });
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;