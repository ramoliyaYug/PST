import mongoose from "mongoose";

interface IUser{
    name:string;
    dept:string;
}

const userSchema = new mongoose.Schema<IUser>({
    name:{
        type:String,
        required:true
    },
    dept:{
        type:String,
        required:true
    }
});

const User = mongoose.model<IUser>("User", userSchema);

export{
    User
}