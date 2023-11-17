const requireOption = require('../requireOption');

module.exports = function (objectRepository) {

    //indításkor ez lefut, megvéd h a model ne undefined legyen
    const PictureModel = requireOption(objectRepository, 'PictureModel');
    //vagy const CreatorModel = objectRepository['CreatorModel'];

    return function (req, res, next) {
        //yt
        //CreatorModel.find({}, function (err, docs) {});
        //docs https://mongoosejs.com/docs/api/model.html#Model.find()
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