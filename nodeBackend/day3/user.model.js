const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    houseNumber : Number,
    landMark : String,
    pinCode : String
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    interst : {
        type : String,
        enum : ["frontend" , "backend" , "fullstack"]
    }, 
    marks : {
        type : Number,
        min:0,
        max:100
    },
    address : [addressSchema],
    isActive : Boolean,
    role : {
        type : String,
        require : true,
        enum : ["student" , "mentor" , "admin"],
        default : "student"
    },
    clubs : mongoose.Schema.Types.ObjectId
})

const User = mongoose.model("users" , userSchema); //make lower case and plural

module.exports = User