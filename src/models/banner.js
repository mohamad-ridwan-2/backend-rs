const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const banner = new Schema({
    title: {
        type: String
    },
    deskripsi: {
        type: String
    },
    image: {
        type: String
    },
    background: {
        type: String
    },
    path: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('banner', banner)