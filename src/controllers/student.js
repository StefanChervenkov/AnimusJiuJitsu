const router = require('express').Router();
const Student = require('../models/student');

router.get('/signup', (req, res) => {
    res.render('signup')
    
});

router.post('/signup', async (req, res) => {
    const {fullName, userName, email, birthDate, password, confirmPassword} = req.body;
    const gender = req.body?.male ? 'male' : 'female';
    const phoneNumber = Number(req.body.phoneNumber);
    const newStudent = {fullName, userName, email, birthDate,phoneNumber, password, gender};

    await Student.create(newStudent);

    res.redirect('/')
    
});




module.exports = router