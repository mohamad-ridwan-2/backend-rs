const mongoose = require('mongoose')

const Schema = mongoose.Schema

const onlineReservation = new Schema({
    nama: {
        type: String
    },
    nomorTelepon: {
        type: String
    },
    tanggalLahir: {
        type: String
    },
    email: {
        type: String
    },
    tanggalKunjungan: {
        type: String
    },
    message: {
        type: String
    },
    nomorRekamMedis: {
        type: String
    },
    spesialisDokter: {
        type: String
    },
    namaDokter: {
        type: String
    },
    jadwalDokter: {
        type: String
    },
    pernahBerobat: {
        type: String
    },
    tipePembayaran: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('online-reservation', onlineReservation)