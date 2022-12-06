const aboutUs = require('../models/aboutus')

// post
exports.post = (req, res, next) => {
    const title = req.body.title
    const path = req.body.path
    const konten = req.body.konten
    const image = req.body.image

    const post = new aboutUs({
        title: title,
        path: path,
        konten: konten,
        image: image
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

    aboutUs.find()
        .countDocuments()
        .then(count => {
            totalItems = count
            return aboutUs.find()
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
    const putId = req.params.putId

    aboutUs.findById(putId)
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