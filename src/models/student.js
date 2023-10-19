const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const studentSchema = new mongoose.Schema({
    fullName: { type: String },
    username: { type: String},
    password: {type: String},
    phoneNumber: {type: Number},
    gender: { type: String },
});

studentSchema.pre('save', async function () {
    const hasch = await bcrypt.hash(this.password, 10);
    this.password = hasch;
})

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;