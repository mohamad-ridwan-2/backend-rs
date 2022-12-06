const navbar = require('../models/navbar')

exports.post = (req, res, next) => {
    const name = req.body.name
    const onlineReservation = req.body.onlineReservation
    const pathOnlineReservation = req.body.pathOnlineReservation
    const noTelpRS = req.body.noTelpRS
    const pathNoTelpRS = req.body.pathNoTelpRS
    const logo = req.body.logo
    const path = req.body.path
    const id = req.body.id
    const nameCollapse1 = req.body.nameCollapse1
    const nameCollapse2 = req.body.nameCollapse2
    const nameCollapse3 = req.body.nameCollapse3
    const nameCollapse4 = req.body.nameCollapse4
    const nameCollapse5 = req.body.nameCollapse5
    const pathCollapse1 = req.body.pathCollapse1
    const pathCollapse2 = req.body.pathCollapse2
    const pathCollapse3 = req.body.pathCollapse3
    const pathCollapse4 = req.body.pathCollapse4
    const pathCollapse5 = req.body.pathCollapse5

    const post = new navbar({
        name: name,
        path: path,
        id: id,
        onlineReservation: onlineReservation,
        pathOnlineReservation: pathOnlineReservation,
        noTelpRS: noTelpRS,
        pathNoTelpRS: pathNoTelpRS,
        logo: logo,
        collapse: {
            child1: {
                nameCollapse1: nameCollapse1,
                pathCollapse1: pathCollapse1
            },
            child2: {
                nameCollapse2: nameCollapse2,
                pathCollapse2: pathCollapse2
            },
            child3: {
                nameCollapse3: nameCollapse3,
                pathCollapse3: pathCollapse3
            },
            child4: {
                nameCollapse4: nameCollapse4,
                pathCollapse4: pathCollapse4
            },
            child5: {
                nameCollapse5: nameCollapse5,
                pathCollapse5: pathCollapse5
            }
        }
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

exports.get = (req, res, next) => {
    let totalItems;

    navbar.find()
        .countDocuments()
        .then(count => {
            totalItems = count
            return navbar.find()
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

exports.putId = (req, res, next) => {
    const name = req.body.name
    const path = req.body.path
    const putId = req.params.putId

    navbar.findById(putId)
        .then(post => {
            if (!post) {
                const err = new Error('data tidak ada')
                err.errorStatus = 404;
                throw err
            }

            post.name = name
            post.path = path

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