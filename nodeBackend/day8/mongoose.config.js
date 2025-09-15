const mongoose = require("mongoose");

const connectToDB = ()=>{
    try{
        mongoose.connect("mongodb://localhost:27017/studentsDB")
        console.log("Connected to DB");
    } catch(error){
        console.log(error);
    }
}

module.exports = connectToDB