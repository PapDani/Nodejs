//mongoose import
//const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Creator = db.model('Creator', {
    _id: String,
    name: String,
    email: String,
    number_of_pictures: Number,
    profile_picture: String
});

module.exports = Creator;