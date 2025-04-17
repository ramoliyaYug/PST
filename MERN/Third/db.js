const mongoose = require('mongoose')

// mongodb+srv://mastermind57369:BWXKTgXwS5JQduag@cluster0.x7wnd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const uri = 'mongodb+srv://mastermind57369:BWXKTgXwS5JQduag@cluster0.x7wnd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const conn = mongoose.connect(uri)

conn.then(()=>{
    console.log("Connected to DB")
}).catch(()=>{
    console.log("Failed to connect to DB")
})

