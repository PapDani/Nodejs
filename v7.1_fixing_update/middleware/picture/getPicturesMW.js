const requireOption = require('../requireOption');

module.exports = function(objectRepositroy){
    return function(req, res, next){
        res.locals.pictures = [
            {
                _id: '001',
                image: 'https://static1.gunfire.com/eng_pl_S-T-Type-64-AEG-Support-Rifle-Replica-1152231289_1.webp',
                title: 'adatbázis nélküli teszt',
                description: 'leírás',
                uploaded_at: Date(),
                modified_at: Date(),
                created_by: 'nobody'
            },
            {
                _id: '002',
                image: 'https://static2.gunfire.com/eng_pl_LK33A2-EBB-Carbine-Replica-OUTLET-1152235274_1.webp',
                title: 'adatbázis nélküli teszt2',
                description: 'leírás2',
                uploaded_at: Date(),
                modified_at: Date(),
                created_by: 'nobody'
            }
        ];
    
        return next();

    };
};