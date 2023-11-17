const requireOption = require('../requireOption');

module.exports = function(objectRepositroy){
    return function(req, res, next){
        //TODO ha sikerül megoldanom update-ot creatornál
        return next();
    };
};