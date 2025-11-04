import mongoose  from "mongoose";

const dbConnect = ()=>{
    mongoose.connect("mongodb://localhost:27017/express")
    .then(()=>{
        console.log("connected")
    })
    .catch((err)=>{
        console.log(err)
    })
}

export{
    dbConnect
}