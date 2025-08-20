const mongoose = require('mongoose');
const User = require('./user.model');

const connectToDB = async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/yugdb")
        console.log("Connected to DB");

        //basic crud
        const users = await User.find()
        console.log(users);

        

    } catch(error){
        console.log(error);
    }
}

module.exports = {connectToDB};