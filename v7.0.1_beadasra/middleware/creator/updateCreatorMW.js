
module.exports = function () {
    return function (req, res, next) {

        console.log("req.body:");
        console.log(req.body.name);

        if((typeof req.body.name === 'undefined') || (typeof req.body.email === 'undefined')){
            return next();
        }

        //req.body {} üres, nem tudom kinyerni az adatokat ejs-ből
        res.locals.creator.name = req.body.name;
        res.locals.creator.email = req.body.email;

        console.log("req.body2:");
        console.log(req.body);

        res.locals.creator.save()
            .then(() => {
                console.log("updated");
                res.redirect('/creators');
            })
            .catch((err) => {
                return next(err);
            });
    };
};