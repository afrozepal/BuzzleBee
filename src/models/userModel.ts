import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
        fname:{
            type:String,
            required:[true,"Please provide your First name"],
        },
        lname:{
            type:String,
            required:[true,"Please provide your Last name"],
        },
        email:{
            type:String,
            required:[true,"Please provide your Email"],
            unique:true,
        },
        password:{
            type:String,
            required:[true,"Please provide password"],
        },
        isVerified:{
            type:Boolean,
            default:false,
        },
        forgotPasswordToken:String,
        Tokenexpiry:Date,
        verifyToken:String,
        verifyTokenExpiry:Date,
}) 

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;