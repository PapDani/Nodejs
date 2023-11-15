//mongoose import
const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Picture = db.model('Picture', {
    _id: String,
    image: String,
    title: String,
    description: String,
    uploaded_at: Date,
    modified_at: Date,
    created_by: {
        type: Schema.Types.ObjectId,
        ref: 'Creator'
    }
});

module.exports = Picture;