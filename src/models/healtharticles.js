const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const healthArticles = new Schema({
    title: {
        type: String,
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
    path: {
        type: String
    },
    image: {
        type: String
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('healthArticles', healthArticles)