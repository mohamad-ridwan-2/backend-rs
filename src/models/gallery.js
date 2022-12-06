const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gallery = new Schema({
    id: {
        type: String
    },
    column1: [
        {
            image1: {
                type: String
            }
        }
    ],
    column2: [
        {
            image2: {
                type: String
            }
        }
    ],
    column3: [
        {
            image3: {
                type: String
            }
        }
    ]
}, {
    timestamps: true
})

module.exports = mongoose.model('gallery', gallery)