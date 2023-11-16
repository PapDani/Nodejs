const requireOption = require('../requireOption');

module.exports = function(objectRepositroy){
    return function(req, res, next){
        console.log("addPictureMW fut");
        console.log("req.body:");
        console.log(req.body);
        console.log("req.file:");
        console.log(req.file);

        return next();
    };
};