const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const studentSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    username: { type: String, required: true, required: true },
    password: String,
    phoneNumber: {type: Number, required: true},
    email: { type: String, required: true},
    gender: { type: String, required: true },
});

studentSchema.pre('save', async function () {
    const hasch = await bcrypt.hash(this.password, 10);
    this.password = hasch;
})

const Student = mongoose.model('User', userSchema);

module.exports = User;