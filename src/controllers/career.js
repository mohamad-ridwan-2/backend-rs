const career = require('../models/career')

// post
exports.post = (req, res, next) => {
    const title = req.body.title
    const titleBidang = req.body.titleBidang
    const nameRs = req.body.nameRs
    const dateLamaran = req.body.dateLamaran
    const qualification = req.body.qualification
    const deskripsi = req.body.deskripsi
    const mainDeskripsi = req.body.mainDeskripsi
    const hrd = req.body.hrd
    const address = req.body.address
    const email = req.body.email
    const path = req.body.path

    const post = new career({
        title: title,
        titleBidang: titleBidang,
        nameRs: nameRs,
        dateLamaran: dateLamaran,
        qualification: qualification,
        deskripsi: deskripsi,
        mainDeskripsi: mainDeskripsi,
        hrd: hrd,
        address: address,
        email: email,
        path: path
    })

    post.save()
        .then(result => {
            res.status(201).json({
                message: 'data berhasil di tambah',
                data: result
            })
        })
        .catch(err => console.log(err))
}

// get
exports.get = (req, res, next) => {
    let totalItems;

    career.find()
        .countDocuments()
        .then(count => {
            totalItems = count
            return career.find()
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

// putId
exports.putId = (req, res, next) => {
    const title = req.body.title
    const titleBidang = req.body.titleBidang
    const nameRs = req.body.nameRs
    const dateLamaran = req.body.dateLamaran
    const qualification = req.body.qualification
    const deskripsi = req.body.deskripsi
    const mainDeskripsi = req.body.mainDeskripsi
    const hrd = req.body.hrd
    const address = req.body.address
    const email = req.body.email
    const path = req.body.path
    const putId = req.params.putId

    career.findById(putId)
        .then(post => {
            if (!post) {
                const err = new Error('data tidak ada')
                err.errorStatus = 404;
                throw err
            }

            post.title = title
            post.titleBidang = titleBidang
            post.nameRs = nameRs
            post.dateLamaran = dateLamaran
            post.qualification = qualification
            post.deskripsi = deskripsi
            post.mainDeskripsi = mainDeskripsi
            post.hrd = hrd
            post.address = address
            post.email = email
            post.path = path

            return post.save()
        })
        .then(result => {
            res.status(200).json({
                message: 'update berhasil',
                data: result
            })
        })
        .catch(err => next(err))
}