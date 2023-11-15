const requireOption = require('../requireOption');

module.exports = function(objectRepositroy){
    return function(req, res, next){
        return next();
    };
};