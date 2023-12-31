const requireOption = require('../requireOption');

module.exports = function (objectRepository) {

    const PictureModel = requireOption(objectRepository, 'PictureModel');

    return function (req, res, next) {

        const pictureId = req.params.pictureid;

        PictureModel.findById(pictureId)
            .then((picture) => {

                //TODO megjeleníteni errort létező error middlewareval
                if (!picture) {
                    const error = new Error('picture not found');
                }

                res.locals.picture = picture;

                return next();
            })
            .catch((err) => {
                return next(err);
            });
    };
};