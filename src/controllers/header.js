const header = require('../models/header')

// post
exports.post = (req, res, next) => {
    const titleBanner = req.body.titleBanner
    const namePage = req.body.namePage
    const path = req.body.path
    const img = req.body.img

    const post = new header({
        titleBanner: titleBanner,
        namePage: namePage,
        path: path,
        img: img
    })

    post.save()
        .then(result => {
            res.status(201).json({
                message: "data berhasil di tambah",
                data: result
            })
        })
        .catch(err => console.log(err))
}

// get
exports.get = (req, res, next) => {
    let totalItems;

    header.find()
        .countDocuments()
        .then(count => {
            totalItems = count
            return header.find()
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
    const titleBanner = req.body.titleBanner
    const namePage = req.body.namePage
    const path = req.body.path
    const img = req.body.img
    const putId = req.params.putId

    header.findById(putId)
        .then(post => {
            if (!post) {
                const err = new Error('data tidak ada')
                err.errorStatus = 404;
                throw err
            }

            post.titleBanner = titleBanner
            post.namePage = namePage
            post.path = path
            post.img = img

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