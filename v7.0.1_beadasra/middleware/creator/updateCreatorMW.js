
module.exports = function () {
    return function (req, res, next) {

        if((typeof req.body.name === 'undefined') || (typeof req.body.email === 'undefined')){
            return next();
        }

        res.locals.creator.name = req.body.name;
        res.locals.creator.email = req.body.email;

        res.locals.creator.save()
            .then(() => {
                res.redirect('/creators');
            })
            .catch((err) => {
                return next(err);
            });
    };
};