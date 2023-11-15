const requireOption = require('../requireOption');

module.exports = function(objectRepositroy){
    return function(req, res, next){
        res.locals.picture = 
            {
                _id: '001',
                image: 'https://static1.gunfire.com/eng_pl_S-T-Type-64-AEG-Support-Rifle-Replica-1152231289_1.webp',
                title: 'adatbázis nélküli teszt',
                description: 'leírás',
                uploaded_at: Date(),
                modified_at: Date(),
                created_by: 'nobody'
            };
    
        return next();
    };
};