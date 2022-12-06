const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const header = new Schema({
    titleBanner: {
        type: String
    },
    namePage: {
        type: String
    },
    path: {
        type: String
    },
    img: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('header', header)