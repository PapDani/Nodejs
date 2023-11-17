const requireOption = require('../requireOption');

module.exports = function (objectRepository) {
    const PictureModel = requireOption(objectRepository, 'PictureModel');

    return function (req, res, next) {
        const pictureId = req.params.pictureid;

        CreatorModel.findByIdAndRemove(pictureId)
            .then((deletedPicture) => {

                if (!deletedPicture) {
                    const error = new Error('Picture not found');
                }

                res.redirect('/gallery');

                return next();
            })
            .catch((err) => {
                return next(err);
            });
    };
};