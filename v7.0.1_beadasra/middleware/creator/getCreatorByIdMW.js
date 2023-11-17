const requireOption = require('../requireOption');

module.exports = function (objectRepository) {

    const CreatorModel = requireOption(objectRepository, 'CreatorModel');

    return function (req, res, next) {
        
        const creatorId = req.params.creatorid;
        console.log("getCreatorById: " + creatorId);

        CreatorModel.findById(creatorId)
            .then((creator) => {
                
                //TODO megjeleníteni errort létező error middlewareval
                /*
                if (!deletedCreator) {
                    const error = new Error('Creator not found');
                    res.status = 404;
                    throw error;
                }
                */
                
                res.locals.creator = creator;

                return next();
            })
            .catch((err) => {
                return next(err);
            });
    };
};