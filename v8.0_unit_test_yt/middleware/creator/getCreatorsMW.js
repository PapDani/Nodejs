const requireOption = require('../requireOption');

module.exports = function (objectRepository) {

    const CreatorModel = requireOption(objectRepository, 'CreatorModel');

    return function (req, res, next) {
        CreatorModel.find({}).exec()
            .then((creators) => {
                res.locals.creators = creators;
                return next();
            })
            .catch((err) => {
                return next(err);
            });
    };
};
