const requireOption = require('../requireOption');

module.exports = function(objectRepository){
    return function(req, res, next){
        console.log("addCreatorMW fut");
        console.log("req.body:");
        console.log(req.body);
        console.log("req.file:");
        console.log(req.file); //ha undefined, akkor nem töltött fel, nem választott képet. Módosításánál erre odafigyelni. Profil kép törlésre odafigyelni.

        return next();
    };
};