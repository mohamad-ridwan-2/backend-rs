const disclaimer = require('../models/disclaimer')

exports.post = (req, res, next) => {
    const paragraph = req.body.paragraph

    const post = new disclaimer({
        paragraph: paragraph
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

    disclaimer.find()
        .countDocuments()
        .then(count => {
            totalItems = count
            return disclaimer.find()
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