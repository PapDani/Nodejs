const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const CreatorModel = requireOption(objectrepository, 'CreatorModel');

    return function(req, res, next) {
        if (
            typeof req.body.name === 'undefined' ||
            typeof req.body.email === 'undefined'
        ) {
            return next();
        }

        if (typeof res.locals.creator === 'undefined') {
            res.locals.creator = new CreatorModel();
        }

        res.locals.befott.name = req.body.name;
        res.locals.befott.email = req.body.email;

        res.locals.creator.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/creators');
        });
    };
};