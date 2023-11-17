const requireOption = require('../requireOption');
const mongoose = require('mongoose');

module.exports = function (objectRepository) {
    const PictureModel = requireOption(objectRepository, 'PictureModel');

    return function (req, res, next) {

        if((typeof req.body.title === 'undefined') || (typeof req.body.description === 'undefined')){
            return next();
        }

        console.log(req.body);
        console.log("id: ");
        console.log(req.body.creators);

        const title = req.body.title;
        const description = req.body.description;
        const created_by = req.body.creators;

        console.log("created_by: ");
        console.log(created_by);

        const newPicture = new PictureModel({
            _id: new mongoose.Types.ObjectId(),
            title: title,
            description: description,
            _created_by: created_by
        });

        newPicture.save()
            .then(() => {
                console.log("picture added");
                res.redirect('/gallery');
            })
            .catch((err) => {
                return next(err);
            });
    };
};