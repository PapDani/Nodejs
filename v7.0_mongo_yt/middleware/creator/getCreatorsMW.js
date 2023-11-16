module.exports = function(objectRepositroy){
    return function(req, res, next){

        res.locals.creators = [
            {
                _id: '001',
                name: 'asd',
                email: 'asd@asd.com',
                number_of_pictures: 0,
                profile_picture: ""
            },
            {
                _id: '002',
                name: 'asd2',
                email: 'asd2@asd2.com',
                number_of_pictures: 2,
                profile_picture: ""
            }
        ];

        return next();
    };
};