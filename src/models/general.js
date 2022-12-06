const mongoose = require('mongoose')

const Schema = mongoose.Schema

const general = new Schema({
    title: {
        type: String
    },
    question: {
        type: String
    },
    answer: {
        type: String
    },
    path: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('general', general)