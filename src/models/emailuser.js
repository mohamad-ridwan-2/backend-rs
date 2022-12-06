const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const emailUser = new Schema({
    email: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('email-user', emailUser)