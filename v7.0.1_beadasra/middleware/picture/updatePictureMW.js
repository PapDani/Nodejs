const requireOption = require('../requireOption');

module.exports = function (objectRepository) {

    return function (req, res, next) {

        if (typeof req.body.title === 'undefined' || typeof req.body.description === 'undefined') {
            return next();
        }

        res.locals.picture.title = req.body.title;
        res.locals.picture.description = req.body.description;

        res.locals.picture.save()
            .then(() => {
                res.redirect('/gallery/edit');
            })
            .catch((err) => {
                return next(err);
            });
    };
};