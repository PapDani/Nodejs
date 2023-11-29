const requireOption = require('../requireOption');
const mongoose = require('mongoose');

module.exports = function (objectRepository) {
    const CreatorModel = requireOption(objectRepository, 'CreatorModel');

    return function (req, res, next) {

        if((typeof req.body.name === 'undefined') || (typeof req.body.email === 'undefined')){
            return next();
        }

        const name = req.body.name;
        const email = req.body.email;
        const profile_picture = req.body.profile_picture;

        const newCreator = new CreatorModel({
            _id: new mongoose.Types.ObjectId(),
            name: name,
            email: email,
            profile_picture: profile_picture
        });

        newCreator.save()
            .then(() => {
                console.log("creator added");
                res.redirect('/creators');
            })
            .catch((err) => {
                return next(err);
            });
    };
};