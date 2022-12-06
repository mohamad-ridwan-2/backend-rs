const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const footer = new Schema({
    title: {
        type: String,
    },
    pages: [
        {
            name: {
                type: String
            },
            path: {
                type: String
            }
        }
    ],
    id: {
        type: String,
    },
    copyRight: {
        type: String
    },
    developedBy: {
        type: String
    },
    urlFacebook: {
        type: String
    },
    urlInstagram: {
        type: String
    },
    urlTwitter: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('footer', footer)