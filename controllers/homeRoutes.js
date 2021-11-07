const router = require('express').Router();
const { Repo, Skill } = require('../models');


router.get('/', async (req, res) => {
    try {
        const repoData = await Repo.findAll();
        const skillData = await Skill.findAll();
        const repos = repoData.map(repo => repo.get({ plain: true }));
        const skills = skillData.map(skill => skill.get({ plain: true }));

        res.render('home', { skills });
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;