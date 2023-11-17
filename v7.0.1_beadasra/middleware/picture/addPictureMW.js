const requireOption = require('../requireOption');
const mongoose = require('mongoose');

module.exports = function (objectRepository) {
    const PictureModel = requireOption(objectRepository, 'PictureModel');

    return function (req, res, next) {

        if((typeof req.body.title === 'undefined') || (typeof req.body.description === 'undefined') || (typeof req.body.created_by === 'undefined')){
            return next();
        }

        //miért nem jön át, ami ejs-el van megadva adat??? (ugyan ez a hiba a creator update-nél is)
        console.log(req.body);

        const title = req.body.title;
        const description = req.body.description;
        const created_by = req.body.created_by;

        const newPicture = new PictureModel({
            _id: new mongoose.Types.ObjectId(),
            title: title,
            description: description,
            created_by: created_by
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