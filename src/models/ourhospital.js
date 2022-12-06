const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ourHospital = new Schema({
    title: {
        type: String
    },
    path: {
        type: String
    },
    konten: {
        type: String
    },
    speciality: {
        type: String
    },
    name: {
        type: String
    },
    Mon: {
        type: String
    },
    Tue: {
        type: String
    },
    Wed: {
        type: String
    },
    Thu: {
        type: String
    },
    Fri: {
        type: String
    },
    Sat: {
        type: String
    },
    Sun: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('our-hospital', ourHospital)