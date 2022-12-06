const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const listDoctor = new Schema({
    name: {
        type: String
    },
    speciality: {
        type: String
    },
    image: {
        type: String
    },
    path: {
        type: String
    },
    doctorSchedule: {
        Monday: {
            type: String
        },
        Tuesday: {
            type: String
        },
        Wednesday: {
            type: String
        },
        Thursday: {
            type: String
        },
        Friday: {
            type: String
        },
        Saturday: {
            type: String
        },
        Sunday: {
            type: String
        }
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('list-doctor', listDoctor)