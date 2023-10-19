const express = require('express')
const router = express.Router();
const homeController = require('./controllers/home');
const studentController = require('./controllers/student');


router.use(express.urlencoded({extended: false}));
router.use(homeController);
router.use(studentController)

module.exports = router;    