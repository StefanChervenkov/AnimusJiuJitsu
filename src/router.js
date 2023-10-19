const express = require('express')
const router = express.Router();
const homeController = require('./controllers/home');
const userController = require('./controllers/user');


router.use(express.urlencoded({extended: false}));
router.use(homeController);

module.exports = router;    