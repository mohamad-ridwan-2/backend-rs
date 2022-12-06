const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const career = new Schema({
    title: {
        type: String
    },
    titleBidang: {
        type: String
    },
    nameRs: {
        type: String
    },
    dateLamaran: {
        type: String
    },
    qualification: {
        type: String
    },
    mainDeskripsi: {
        type: String
    },
    deskripsi: {
        type: String
    },
    hrd: {
        type: String
    },
    address: {
        type: String
    },
    email: {
        type: String
    },
    path: {
        type: String
    }
})

module.exports = mongoose.model('career', career)