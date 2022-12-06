const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const navbar = new Schema({
    name: {
        type: String
    },
    path: {
        type: String
    },
    id: {
        type: String
    },
    onlineReservation: {
        type: String
    },
    pathOnlineReservation: {
        type: String
    },
    pathNoTelpRS: {
        type: String
    },
    noTelpRS: {
        type: String
    },
    logo: {
        type: String
    },
    collapse: {
        child1: {
            nameCollapse1: {
                type: String
            },
            pathCollapse1: {
                type: String
            }
        },
        child2: {
            nameCollapse2: {
                type: String
            },
            pathCollapse2: {
                type: String
            }
        },
        child3: {
            nameCollapse3: {
                type: String
            },
            pathCollapse3: {
                type: String
            }
        },
        child4: {
            nameCollapse4: {
                type: String
            },
            pathCollapse4: {
                type: String
            }
        },
        child5: {
            nameCollapse5: {
                type: String
            },
            pathCollapse5: {
                type: String
            }
        }
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('navbar', navbar)