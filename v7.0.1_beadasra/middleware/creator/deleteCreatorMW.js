const requireOption = require('../requireOption');

module.exports = function (objectRepository) {
    const CreatorModel = requireOption(objectRepository, 'CreatorModel');

    return function (req, res, next) {
        const creatorId = req.params.creatorid; // Adjust the parameter name based on your route

        // Use findByIdAndRemove to find and remove the creator by its ID
        CreatorModel.findByIdAndRemove(creatorId)
            .then((deletedCreator) => {
                // Check if a creator was found and deleted

                if (!deletedCreator) {
                    const error = new Error('Creator not found');
                    res.status = 404;
                    throw error;
                }

                //utolsó creator törlése hibás
                // Redirect or respond as needed
                res.redirect('/creators'); // Adjust the redirect URL

                // Continue to the next middleware if needed
                return next();
            })
            .catch((err) => {
                // Handle any errors that occurred during the query
                return next(err);
            });
    };
};