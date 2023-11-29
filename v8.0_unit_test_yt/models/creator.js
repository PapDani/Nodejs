//mongoose import
const db = require('../config/db');

const Creator = db.model('Creator', {
    _id: String,
    name: String,
    email: String,
    profile_picture: String
});

module.exports = Creator;