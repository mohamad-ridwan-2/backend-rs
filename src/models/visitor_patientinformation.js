const mongoose = require('mongoose')

const Schema = mongoose.Schema

const visitor_patientInformation = new Schema({
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

module.exports = mongoose.model('visitor_patient_information', visitor_patientInformation)