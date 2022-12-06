const ourHospital = require('../models/ourhospital')

// post
exports.post = (req, res, next) => {
    const title = req.body.title
    const path = req.body.path
    const konten = req.body.konten
    const speciality = req.body.speciality
    const name = req.body.name
    const Mon = req.body.Mon
    const Tue = req.body.Tue
    const Wed = req.body.Wed
    const Thu = req.body.Thu
    const Fri = req.body.Fri
    const Sat = req.body.Sat
    const Sun = req.body.Sun

    const post = new ourHospital({
        title: title,
        path: path,
        konten: konten,
        speciality: speciality,
        name: name,
        Mon: Mon,
        Tue: Tue,
        Wed: Wed,
        Thu: Thu,
        Fri: Fri,
        Sat: Sat,
        Sun: Sun
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

    ourHospital.find()
        .countDocuments()
        .then(count => {
            totalItems = count
            return ourHospital.find()
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
    const speciality = req.body.speciality
    const name = req.body.name
    const Mon = req.body.Mon
    const Tue = req.body.Tue
    const Wed = req.body.Wed
    const Thu = req.body.Thu
    const Fri = req.body.Fri
    const Sat = req.body.Sat
    const Sun = req.body.Sun
    const putId = req.params.putId

    ourHospital.findById(putId)
        .then(post => {
            if (!post) {
                const err = new Error('data tidak ada')
                err.errorStatus = 404;
                throw err
            }

            post.title = title
            post.path = path
            post.konten = konten
            post.speciality = speciality
            post.name = name
            post.Mon = Mon
            post.Tue = Tue
            post.Wed = Wed
            post.Thu = Thu
            post.Fri = Fri
            post.Sat = Sat
            post.Sun = Sun

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