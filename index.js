const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const multer = require('multer')
const path = require('path')
// const dotenv = require('dotenv').config()

require('dotenv').config();

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const healthArticlesRoutes = require('./src/routes/healtharticles')
const testimonialRoutes = require('./src/routes/testimonial')
const aboutUsRoutes = require('./src/routes/aboutus')
const promoRoutes = require('./src/routes/promo')
const generalRoutes = require('./src/routes/general')
const visitor_patientInformationRoutes = require('./src/routes/visitor_patientinformation')
const careerRoutes = require('./src/routes/career')
const ourHospitalRoutes = require('./src/routes/ourhospital')
const findDoctorRoutes = require('./src/routes/finddoctor')
const listDoctorRoutes = require('./src/routes/listdoctor')
const carouselHomeRoutes = require('./src/routes/carouselhome')
const headerRoutes = require('./src/routes/header')
const bannerRoutes = require('./src/routes/banner')
const emailUserRoutes = require('./src/routes/emailuser')
const onlineReservationRoutes = require('./src/routes/onlinereservation')
const contactUsRoutes = require('./src/routes/contactus')
const navbarRoutes = require('./src/routes/navbar')
const footerRoutes = require('./src/routes/footer')
const disclaimerRoutes = require('./src/routes/disclaimer')
const publicationRoutes = require('./src/routes/publication')
const galleryRoutes = require('./src/routes/gallery')

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, 'rumah-sakit' + '-' + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const image = 'image1' || 'image2' || 'image3' || 'image4' || 'image5'

app.use('/images', express.static(path.join(__dirname, 'images')))
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single(image))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credential", "true")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
})

app.use('/health-articles', healthArticlesRoutes)
app.use('/testimonial', testimonialRoutes)
app.use('/about-us', aboutUsRoutes)
app.use('/promo', promoRoutes)
app.use('/faq/general', generalRoutes)
app.use('/faq/visitor-patient-information', visitor_patientInformationRoutes)
app.use('/career', careerRoutes)
app.use('/our-hospital', ourHospitalRoutes)
app.use('/find-doctor', findDoctorRoutes)
app.use('/list-doctor', listDoctorRoutes)
app.use('/carousel-home', carouselHomeRoutes)
app.use('/header', headerRoutes)
app.use('/banner', bannerRoutes)
app.use('/email-user', emailUserRoutes)
app.use('/online-reservation', onlineReservationRoutes)
app.use('/contact-us', contactUsRoutes)
app.use('/navbar', navbarRoutes)
app.use('/footer', footerRoutes)
app.use('/disclaimer', disclaimerRoutes)
app.use('/publication', publicationRoutes)
app.use('/gallery', galleryRoutes)

app.use((error, req, res, next) => {
    const status = error.errorStatus || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
})

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static("build"));
//     app.get("*", (req, res) => {
//         res.sendFile(path.resolve(__dirname, "build", "index.html"))
//     })
// }

const PORT = process.env.PORT || 6235

mongoose.connect('mongodb+srv://ridwan:ugELM2oeKdlMmVR9@cluster0.mtciq.mongodb.net/rumahsakit?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        // app.use(express.static(path.join(__dirname, 'public')))
        // app.set('views', path.join(__dirname, 'views'))
        // app.set('view engine', 'ejs')
        // app.get('/', (req, res) => res.render('pages/index'))
        // app.get('/cool', (req, res) => res.send(cool()))
        app.listen(PORT, () => console.log(`Server connect on ${PORT}`))
    })
    .catch((err) => console.log(err))

