const requireOption = require('../requireOption');

module.exports = function (objectRepository) {

    const CreatorModel = requireOption(objectRepository, 'CreatorModel');

    return function (req, res, next) {

        CreatorModel.findOne({ _id: req.params.creatorid })
        .then((creator) => {
            if (!creator) {
                const error = new Error('Creator not found');
                return next(error);
            }

            res.locals.creator = creator;
            return next();
        })
        .catch((err) => {
            return next(err);
        });
    };
};