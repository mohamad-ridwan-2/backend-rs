const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const promo = new Schema({
    title: {
        type: String
    },
    path: {
        type: String
    },
    date: {
        type: String
    },
    deskripsi: {
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

module.exports = mongoose.model('promo', promo)