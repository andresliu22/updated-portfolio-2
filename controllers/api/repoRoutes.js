const router = require('express').Router();
const { Repo, Skill } = require('../../models');
router.post('/', async (req, res) => {
    try {
        const repoData = await Repo.create(req.body);
        !repoData ? res.status(404).json(new Error("No repositories found")) : null;
        req.session.save(() => {
            req.session.repo_data = true;
        });
        res.status(200).json(repoData);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;