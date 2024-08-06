import mongoose from "mongoose";

const {Schema}=mongoose

export const userSchema=new Schema({
    firstName:String,
    lastName:String,
    email:String,
    phoneNo:String
})

const user = mongoose.model('user',userSchema);
export default user