const mongoose = require("mongoose");
function connectDB(){
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("database connected successfully");
    })
    .catch((err)=>{
        console.error("databse connecting to failed");
    })
}
module.exports = connectDB;