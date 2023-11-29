const requireOption = require('../requireOption');

module.exports = function (objectRepository) {

    const PictureModel = requireOption(objectRepository, 'PictureModel');

    return function (req, res, next) {

        PictureModel.findOne({ _id: req.params.pictureid})
            .then((picture) => {

                //TODO megjeleníteni errort létező error middlewareval
                if (!picture) {
                    const error = new Error('Creator not found');
                    return next(error);
                }

                res.locals.picture = picture;

                return next();
            })
            .catch((err) => {
                return next(err);
            });
    };
};