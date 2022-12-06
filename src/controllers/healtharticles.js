const healthArticles = require('../models/healtharticles')

const getDate = new Date().getDate()
const getMonth = new Date().getMonth()
const getYear = new Date().getFullYear();

const arrayMonth = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

// post
exports.post = (req, res, next) => {
    const title = req.body.title
    const date = `${getDate} ${arrayMonth[getMonth - 1]} ${getYear}`
    const deskripsi = req.body.deskripsi
    const path = req.body.path
    const image = req.body.image
    const konten = req.body.konten

    const post = new healthArticles({
        title: title,
        date: date,
        deskripsi: deskripsi,
        path: path,
        image: image,
        konten: konten
    })

    post.save()
        .then(result => {
            res.status(201).json({
                message: 'data berhasil di tambah',
                data: result
            })
        })
        .catch(err => {
            console.log('salah nih', err)
        })
}

// get
exports.get = (req, res, next) => {
    let totalItems;

    healthArticles.find()
        .countDocuments()
        .then(count => {
            totalItems = count
            return healthArticles.find()
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

// put By id
exports.putById = (req, res, next) => {
    const title = req.body.title
    const deskripsi = req.body.deskripsi
    const path = req.body.path
    const image = req.body.image
    const konten = req.body.konten
    const date = `${getDate} ${arrayMonth[getMonth - 1]} ${getYear}`
    const putId = req.params.putId

    healthArticles.findById(putId)
        .then(post => {
            if (!post) {
                const err = new Error('data tidak ada!')
                err.errorStatus = 404;
                throw err
            }

            post.title = title
            post.deskripsi = deskripsi
            post.image = image
            post.konten = konten
            post.date = date
            post.path = path

            return post.save()
        })
        .then(result => {
            res.status(200).json({
                message: 'Update success!!',
                data: result
            })
        })
        .catch(err => {
            next(err)
        })
}

