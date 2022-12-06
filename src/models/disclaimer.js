const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const disclaimer = new Schema({
    paragraph: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('disclaimer', disclaimer)