const onlineReservation = require('../models/onlinereservation')

// post
exports.post = (req, res, next) => {
    const nama = req.body.nama
    const nomorTelepon = req.body.nomorTelepon
    const tanggalLahir = req.body.tanggalLahir
    const email = req.body.email
    const tanggalKunjungan = req.body.tanggalKunjungan
    const message = req.body.message
    const nomorRekamMedis = req.body.nomorRekamMedis
    const spesialisDokter = req.body.spesialisDokter
    const namaDokter = req.body.namaDokter
    const jadwalDokter = req.body.jadwalDokter
    const pernahBerobat = req.body.pernahBerobat
    const tipePembayaran = req.body.tipePembayaran

    const post = new onlineReservation({
        nama: nama,
        nomorTelepon: nomorTelepon,
        tanggalLahir: tanggalLahir,
        email: email,
        tanggalKunjungan: tanggalKunjungan,
        message: message,
        nomorRekamMedis: nomorRekamMedis,
        spesialisDokter: spesialisDokter,
        namaDokter: namaDokter,
        jadwalDokter: jadwalDokter,
        pernahBerobat: pernahBerobat,
        tipePembayaran: tipePembayaran
    })

    post.save()
        .then(result => {
            res.status(201).json({
                message: 'data berhasil di tambah',
                data: result
            })
        })
        .catch(err => {
            console.log(err)
        })
}

// get
exports.get = (req, res, next) => {
    let totalItems;

    onlineReservation.find()
        .countDocuments()
        .then(count => {
            totalItems = count
            return onlineReservation.find()
        })
        .then(result => {
            res.status(200).json({
                message: 'data di dapatkan',
                data: result,
                total_data: totalItems
            })
        })
        .catch(err => {
            next(err)
        })
}