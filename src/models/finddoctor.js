const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const findDoctor = new Schema({
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
    },
    titleKonten: {
        type: String
    },
    deskripsi: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('find-doctor', findDoctor)