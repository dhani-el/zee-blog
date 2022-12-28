const mongoose = require("mongoose");



const commentSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required : true,
    },
    body:{
        type : String,
        required: true
    },
});


const commentModel = new mongoose.model("comment" , commentSchema);
module.exports = commentModel;