const testimonial = require('../models/testimonial')

// post
exports.post = (req, res, next) => {
    const name = req.body.name
    const label = req.body.label
    const image = req.body.image
    const deskripsi = req.body.deskripsi
    const background = req.body.background

    const post = new testimonial({
        name: name,
        label: label,
        image: image,
        deskripsi: deskripsi,
        background: background
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

    testimonial.find()
        .countDocuments()
        .then(count => {
            totalItems = count
            return testimonial.find()
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
    const name = req.body.name
    const label = req.body.label
    const image = req.body.image
    const deskripsi = req.body.deskripsi
    const background = req.body.background
    const putId = req.params.putId

    testimonial.findById(putId)
        .then(post => {
            if (!post) {
                const err = new Error('data tidak ada')
                err.errorStatus = 404;
                throw err
            }

            post.name = name
            post.label = label
            post.image = image
            post.deskripsi = deskripsi
            post.background = background

            return post.save()
        })
        .then(result => {
            res.status(200).json({
                message: 'update berhasil',
                data: result
            })
        })
        .catch(err => {
            next(err)
        })
}
