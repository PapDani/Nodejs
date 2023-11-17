const requireOption = require('../requireOption');

module.exports = function (objectRepository) {
    const CreatorModel = requireOption(objectRepository, 'CreatorModel');

    return function (req, res, next) {
        const creatorId = req.params.creatorid;

        CreatorModel.findByIdAndRemove(creatorId)
            .then((deletedCreator) => {

                //TODO megjeleníteni errort létező error middlewareval
                /*
                if (!deletedCreator) {
                    const error = new Error('Creator not found');
                    res.status = 404;
                    throw error;
                }
                */

                res.redirect('/creators');

                return next();
            })
            .catch((err) => {
                return next(err);
            });
    };
};