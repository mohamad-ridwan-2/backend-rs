const visitor_patientInformation = require('../models/visitor_patientinformation')

// post
exports.post = (req, res, next) => {
    const title = req.body.title
    const question = req.body.question
    const answer = req.body.answer
    const path = req.body.path

    const post = new visitor_patientInformation({
        title: title,
        question: question,
        answer: answer,
        path: path
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

    visitor_patientInformation.find()
        .countDocuments()
        .then(count => {
            totalItems = count
            return visitor_patientInformation.find()
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
    const question = req.body.question
    const answer = req.body.answer
    const path = req.body.path
    const putId = req.params.putId

    visitor_patientInformation.findById(putId)
        .then(post => {
            if (!post) {
                const err = new Error('data tidak ada')
                err.errorStatus = 404;
                throw err
            }

            post.title = title
            post.question = question
            post.answer = answer
            post.path = path

            return post.save()
        })
        .then(result => {
            res.status(200).json({
                message: "update berhasil",
                data: result
            })
        })
        .catch(err => next(err))
}