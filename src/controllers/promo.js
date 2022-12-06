const promo = require('../models/promo')

// post
exports.post = (req, res, next) => {
    const title = req.body.title
    const path = req.body.path
    const date = req.body.date
    const deskripsi = req.body.deskripsi
    const konten = req.body.konten
    const image = req.body.image

    const post = new promo({
        title: title,
        path: path,
        date: date,
        deskripsi: deskripsi,
        konten: konten,
        image: image
    })

    post.save()
        .then(result => {
            res.status(200).json({
                message: 'data berhasil di tambah',
                data: result
            })
        })
        .catch(err => console.log(err))
}

// get
exports.get = (req, res, next) => {
    let totalItems;

    promo.find()
        .countDocuments()
        .then(count => {
            totalItems = count
            return promo.find()
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
    const date = req.body.date
    const deskripsi = req.body.deskripsi
    const konten = req.body.konten
    const image = req.body.image
    const putId = req.params.putId

    promo.findById(putId)
        .then(post => {
            if (!post) {
                const err = new Error('data tidak ada')
                err.errorStatus = 404;
                throw err
            }

            post.title = title
            post.path = path
            post.date = date
            post.deskripsi = deskripsi
            post.konten = konten
            post.image = image

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