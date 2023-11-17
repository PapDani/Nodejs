const requireOption = require('../requireOption');

module.exports = function (objectRepository) {

    //indításkor ez lefut, megvéd h a model ne undefined legyen
    const CreatorModel = requireOption(objectRepository, 'CreatorModel');
    //vagy const CreatorModel = objectRepository['CreatorModel'];

    return function (req, res, next) {
        //yt
        //CreatorModel.find({}, function (err, docs) {});
        //docs https://mongoosejs.com/docs/api/model.html#Model.find()
        CreatorModel.find({}).exec()
            .then((creators) => {
                // Pass the result to res.locals.creators
                res.locals.creators = creators;
                return next();
            })
            .catch((err) => {
                // Handle any errors
                return next(err);
            });
    };
};
