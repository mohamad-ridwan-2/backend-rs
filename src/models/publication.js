const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const publication = new Schema({
    title: {
        type: String
    },
    image: {
        type: String
    },
    date: {
        type: String
    },
    deskripsi: {
        type: String
    },
    icon: {
        type: String
    },
    link: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('publication', publication)