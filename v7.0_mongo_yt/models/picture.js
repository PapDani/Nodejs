//mongoose import
const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Picture = db.model('Picture', {
    _id: String,
    image: String,
    title: String,
    description: String,
    _created_by: { //aláhúzást tettem elé 7.0
        type: Schema.Types.ObjectId,
        ref: 'Creator'
    }
});

module.exports = Picture;