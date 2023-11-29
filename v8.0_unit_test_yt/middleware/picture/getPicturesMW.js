const requireOption = require('../requireOption');

module.exports = function (objectRepository) {

    const PictureModel = requireOption(objectRepository, 'PictureModel');

    return function (req, res, next) {
        PictureModel.find({}).exec()
            .then((pictures) => {
                res.locals.pictures = pictures;
                return next();
            })
            .catch((err) => {
                return next(err);
            });
    };
};