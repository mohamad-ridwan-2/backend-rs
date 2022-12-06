const listDoctor = require('../models/listdoctor')

// post
exports.post = (req, res, next) => {
    const name = req.body.name
    const speciality = req.body.speciality
    const image = req.body.image
    const path = req.body.path
    const Monday = req.body.Monday
    const Tuesday = req.body.Tuesday
    const Wednesday = req.body.Wednesday
    const Thursday = req.body.Thursday
    const Friday = req.body.Friday
    const Saturday = req.body.Saturday
    const Sunday = req.body.Sunday

    const post = new listDoctor({
        name: name,
        speciality: speciality,
        image: image,
        path: path,
        doctorSchedule: {
            Monday: Monday,
            Tuesday: Tuesday,
            Wednesday: Wednesday,
            Thursday: Thursday,
            Friday: Friday,
            Saturday: Saturday,
            Sunday: Sunday
        }
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

    listDoctor.find()
        .countDocuments()
        .then(count => {
            totalItems = count
            return listDoctor.find()
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
    const speciality = req.body.speciality
    const image = req.body.image
    const path = req.body.path
    const Monday = req.body.Monday
    const Tuesday = req.body.Tuesday
    const Wednesday = req.body.Wednesday
    const Thursday = req.body.Thursday
    const Friday = req.body.Friday
    const Saturday = req.body.Saturday
    const Sunday = req.body.Sunday
    const putId = req.params.putId

    listDoctor.findById(putId)
        .then(post => {
            if (!post) {
                const err = new Error('data tidak ada')
                err.errorStatus = 404;
                throw err
            }

            post.name = name
            post.speciality = speciality
            post.image = image
            post.path = path
            post.Monday = Monday
            post.Tuesday = Tuesday
            post.Wednesday = Wednesday
            post.Thursday = Thursday
            post.Friday = Friday
            post.Saturday = Saturday
            post.Sunday = Sunday

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