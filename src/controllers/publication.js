const publication = require('../models/publication')

exports.post = (req, res, next) => {
    const title = req.body.title
    const image = req.body.image
    const date = req.body.date
    const deskripsi = req.body.deskripsi
    const icon = req.body.icon
    const link = req.body.link

    const post = new publication({
        title: title,
        image: image,
        date: date,
        deskripsi: deskripsi,
        icon: icon,
        link: link
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

exports.get = (req, res, next) => {
    let totalItems;

    publication.find()
        .countDocuments()
        .then(count => {
            totalItems = count
            return publication.find()
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