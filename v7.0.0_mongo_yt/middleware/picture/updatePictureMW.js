const requireOption = require('../requireOption');

module.exports = function(objectRepositroy){
    return function(req, res, next){
        console.log("updateCreatorMW fut");
        if(req.body.title === "undefined"){
            console.log("első futás");
        }
        else{
            console.log("req.body:");
            console.log(req.body);
        }
        return next();
    };
};