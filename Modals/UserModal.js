import mongoose, { Schema } from "mongoose";

const user = new Schema({
    name : String,
    email : String,
    subject : String,
    message : String
})

export default mongoose.model("USERS" , user)