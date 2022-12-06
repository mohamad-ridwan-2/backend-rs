const gallery = require('../models/gallery')

exports.post = (req, res, next) => {
    const image1 = req.body.image1
    const image2 = req.body.image2
    const image3 = req.body.image3
    const id = req.body.id

    const post = new gallery({
        id: id,
        column1: [
            {
                image1: image1
            }
        ],
        column2: [
            {
                image2: image2
            }
        ],
        column3: [
            {
                image3: image3
            }
        ]
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

    gallery.find()
        .countDocuments()
        .then(count => {
            totalItems = count
            return gallery.find()
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