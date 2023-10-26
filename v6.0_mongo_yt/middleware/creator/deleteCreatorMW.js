/*alkotó törlése az adatbázisból*/

module.exports = function(objectrepository){
    return function(req, res, next){
        return next();
    }
}