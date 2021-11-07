const isAlreadyGenerated = (req, res, next) => {
    if (!req.session.repo_data && !req.session.skill_data) {
        res.redirect('/');
    } else {
        next();
    }
}

module.exports = isAlreadyGenerated;