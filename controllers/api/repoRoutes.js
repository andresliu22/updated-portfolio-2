const router = require('express').Router();
const Repo = require('../../models/Repo');

router.post('/', async (req, res) => {
    try {
        const repoData = await Repo.create(req.body);
        !repoData ? res.status(403).json(new Error("No repositories found")) : null;
        res.status(200).json(userData);
      } catch (err) {
        res.status(500).json(err);
      }
})


module.exports = router;