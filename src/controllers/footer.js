const footer = require('../models/footer')

exports.post = (req, res, next) => {
    const title = req.body.title
    const name = req.body.name
    const path = req.body.path

    const post = new footer({
        title: title,
        pages: [
            {
                name: name,
                path: path
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

exports.postFooterTwo = (req, res, next) => {
    const id = req.body.id
    const copyRight = req.body.copyRight
    const developedBy = req.body.developedBy
    const urlFacebook = req.body.urlFacebook
    const urlInstagram = req.body.urlInstagram
    const urlTwitter = req.body.urlTwitter

    const post = new footer({
        id: id,
        copyRight: copyRight,
        developedBy: developedBy,
        urlFacebook: urlFacebook,
        urlInstagram: urlInstagram,
        urlTwitter: urlTwitter
    })

    post.save()
        .then(result => {
            res.status(201).json({
                message: ' data berhasil di tambah',
                data: result
            })
        })
        .catch(err => console.log(err))
}

exports.get = (req, res, next) => {
    let totalItems;

    footer.find()
        .countDocuments()
        .then(count => {
            totalItems = count
            return footer.find()
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