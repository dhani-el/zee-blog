const mongoose = require("mongoose");



const userSchema = new mongoose.Schema({
   name: {
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type: String,
        required:true
    },
    newsLetter: Boolean
})


const userModel = new mongoose.model("user" , userSchema);
module.exports = userModel;