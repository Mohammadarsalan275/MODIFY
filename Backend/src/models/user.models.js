const mongoose= require("mongoose");
const userSchema= new mongoose.Schema({
    username:{
        type :string,
        required:[true, "username is required"],
        unique :[true,"username must be unique"]
    },
    email:{
        type: string,
        required:[true,"email is required"],
        unique:[true,"email must be unique"]
    },
    password:{
        type: string,
        required:[true, "password is required"]
    }
})

const userModel =mongoose.model("user", userSchema);
 module.exports = userModel;