const banner = require('../models/banner')

// post
exports.post = (req, res, next) => {
    const title = req.body.title
    const deskripsi = req.body.deskripsi
    const image = req.body.image
    const background = req.body.background
    const path = req.body.path

    const post = new banner({
        title: title,
        deskripsi: deskripsi,
        image: image,
        background: background,
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

    banner.find()
        .countDocuments()
        .then(count => {
            totalItems = count
            return banner.find()
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
    const deskripsi = req.body.deskripsi
    const image = req.body.image
    const path = req.body.path
    const putId = req.params.putId

    banner.findById(putId)
        .then(post => {
            if (!post) {
                const err = new Error('data tidak ada')
                err.errorStatus = 404;
                throw err
            }

            post.title = title
            post.deskripsi = deskripsi
            post.imaage = image
            post.path = path

            return post.save()
        })
        .then(result => {
            res.status(200).json({
                message: 'berhasil update',
                data: result
            })
        })
        .catch(err => next(err))
}