const requireOption = require('../requireOption');

module.exports = function (objectRepository) {

    const PictureModel = requireOption(objectRepository, 'PictureModel');

    return function (req, res, next) {

        const pictureId = req.params.pictureid;

        CreatorModel.findById(pictureId)
            .then((picture) => {

                //hogy kezel, mutatom?
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