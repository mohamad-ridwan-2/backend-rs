const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const carouselHome = new Schema({
    img: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('carousel-home', carouselHome)