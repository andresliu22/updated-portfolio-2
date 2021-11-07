const router = require('express').Router();
const { Repo, Skill } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const skillData = await Skill.create(req.body);
        !skillData ? res.status(404).json(new Error("No skills found")) : null;
        req.session.save(() => {
            req.session.skill_data = true;
        });
        res.status(200).json(skillData);
    } catch (err) {
        res.status(500).json(err);
    } 
})

module.exports = router;