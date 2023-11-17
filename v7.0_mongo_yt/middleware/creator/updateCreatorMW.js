
module.exports = function () {
    return function (req, res, next) {

        if((typeof req.body.name === 'undefined') || (typeof req.body.email === 'undefined')){
            return next();
        }

        // Update creator properties based on form data
        res.locals.creator.name = req.body.name;
        res.locals.creator.email = req.body.email;

        // Save the updated creator using promises
        res.locals.creator.save()
            .then(() => {
                // Redirect to the creators page after successful update
                console.log("updated");
                res.redirect('/creators');
            })
            .catch((err) => {
                // Pass the error to the next middleware for handling
                return next(err);
            });
    };
};