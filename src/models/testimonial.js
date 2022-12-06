const mongoose = require('mongoose')

const Schema = mongoose.Schema

const testimonial = new Schema({
    name: {
        type: String,
    },
    label: {
        type: String
    },
    image: {
        type: String
    },
    deskripsi: {
        type: String
    },
    background: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('testimonial', testimonial)