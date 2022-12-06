const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const aboutUs = new Schema({
    title: {
        type: String
    },
    path: {
        type: String
    },
    konten: {
        type: String
    },
    image: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('aboutus', aboutUs)