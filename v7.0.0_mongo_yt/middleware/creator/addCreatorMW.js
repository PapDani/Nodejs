const requireOption = require('../requireOption');
const mongoose = require('mongoose');

module.exports = function (objectRepository) {
    const CreatorModel = requireOption(objectRepository, 'CreatorModel');

    return function (req, res, next) {
        console.log("addCreator fut");
        console.log(req.body);

        if((typeof req.body.name === 'undefined') || (typeof req.body.email === 'undefined')){
            return next();
        }

        console.log("addCreator fut2");

        // Get data from the request body
        const name = req.body.name;
        const email = req.body.email;
        const profile_picture = req.body.profile_picture;

        console.log(req.body);

        // You can handle the profile picture file upload here if needed

        // Create a new instance of the Creator model
        const newCreator = new CreatorModel({
            _id: new mongoose.Types.ObjectId(),
            name: name,
            email: email,
            profile_picture: profile_picture
            // Set other properties as needed
        });

        // Save the new creator to the database
        newCreator.save()
            .then(() => {
                // Redirect to the creators page after successful addition
                console.log("creator added");
                res.redirect('/creators');
            })
            .catch((err) => {
                // Handle any errors that occurred during the save process
                return next(err);
            });
    };
};