module.exports = function(objectRepositroy){
    return function(req, res, next){
        res.locals.creator = 
            {
                _id: '001',
                name: 'asd',
                email: 'asd@asd.com',
                number_of_pictures: 0,
                profile_picture: ""
            };

        return next();
    };
};