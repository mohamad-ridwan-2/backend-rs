const findDoctor = require('../models/finddoctor')

// post
exports.post = (req, res, next) => {
    const title = req.body.title
    const path = req.body.path
    const konten = req.body.konten
    const image = req.body.image
    const titleKonten = req.body.titleKonten
    const deskripsi = req.body.deskripsi

    const post = new findDoctor({
        title: title,
        path: path,
        konten: konten,
        image: image,
        titleKonten: titleKonten,
        deskripsi: deskripsi
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

    findDoctor.find()
        .countDocuments()
        .then(count => {
            totalItems = count
            return findDoctor.find()
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
    const path = req.body.path
    const konten = req.body.konten
    const image = req.body.image
    const titleKonten = req.body.titleKonten
    const deskripsi = req.body.deskripsi
    const putId = req.params.putId

    findDoctor.findById(putId)
        .then(post => {
            if (!post) {
                const err = new Error('data tidak ada')
                err.errorStatus = 404;
                throw err
            }

            post.title = title
            post.path = path
            post.konten = konten
            post.image = image
            post.titleKonten = titleKonten
            post.deskripsi = deskripsi

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