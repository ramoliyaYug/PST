const mongoose = require("mongoose");

const studentModel = new mongoose.Schema({
    studentId : String,
    marks : Number
})

const StudentModel = mongoose.model("students",studentModel)
module.exports = StudentModel