const mongoose = require("mongoose");


const LikeSchema = new mongoose.Schema({
    title:{
        type: String,
        required : true
    },
    username : {
        type : String,
        required: true,
    }
});

const likeModel = new mongoose.model("like" , LikeSchema);
module.exports = likeModel;