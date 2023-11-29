const requireOption = require('../requireOption');

module.exports = function (objectRepository) {
    const PictureModel = requireOption(objectRepository, 'PictureModel');

    return function (req, res, next) {
        const pictureId = req.params.pictureid;

        console.log(pictureId);

        PictureModel.findByIdAndRemove(pictureId)
            .then((deletedPicture) => {

                //TODO megjeleníteni errort létező error middlewareval
                /*
                if (!deletedPicture) {
                    const error = new Error('Picture not found');
                }
                */

                res.redirect('/gallery/edit');

                return next();
            })
            .catch((err) => {
                return next(err);
            });
    };
};