const requireOption = require('../requireOption');

module.exports = function (objectRepository) {

    const CreatorModel = requireOption(objectRepository, 'CreatorModel');

    return function (req, res, next) {
        
        const creatorId = req.params.creatorid;
        console.log("getCreatorById: " + creatorId);

        // Use findById to find a creator by its ID
        CreatorModel.findOne({_id: creatorId})
            .then((creator) => {
                // Check if a creator was found
                
                if (!creator) {
                    const error = new Error('Creator not found'); 
                    res.status = 404;                   
                    throw error;
                }
                
                // Attach the found creator to res.locals
                res.locals.creator = creator;

                // Continue to the next middleware
                return next();
            })
            .catch((err) => {
                // Handle any errors that occurred during the query
                return next(err);
            });
    };
};