const contactUs = require('../models/contactus')

// post
exports.post = (req, res, next) => {
    const id = req.body.id
    const nama = req.body.nama
    const emailAddress = req.body.emailAddress
    const phoneNumber = req.body.phoneNumber
    const company = req.body.company
    const message = req.body.message
    const noTelpRS = req.body.noTelpRS
    const emailRS = req.body.emailRS

    const post = new contactUs({
        id: id,
        nama: nama,
        emailAddress: emailAddress,
        phoneNumber: phoneNumber,
        company: company,
        message: message,
        noTelpRS: noTelpRS,
        emailRS: emailRS
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

    contactUs.find()
        .countDocuments()
        .then(count => {
            totalItems = count
            return contactUs.find()
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
    const nama = req.body.nama
    const emailAddress = req.body.emailAddress
    const phoneNumber = req.body.phoneNumber
    const company = req.body.company
    const message = req.body.message
    const putId = req.params.putId

    contactUs.findById(putId)
        .then(post => {
            if (!post) {
                const err = new Error('data tidak ada')
                err.errorStatus = 404;
                throw err
            }

            post.nama = nama
            post.emailAddress = emailAddress
            post.phoneNumber = phoneNumber
            post.company = company
            post.message = message

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