const mongoose  = require('mongoose');


const BlogSchema = new mongoose.Schema({
    title:{
        type : String,
        required:true,
    },
    body:{
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,   
    },
    genre:{
        type: String,
        required: true,
    },
    readTime:{
        type: String,
        required: true, 
    },
    date:{
        type: String,
        required: true, 
    },
    image:{
        type: String,
        required: true,
    },
    isPaid:{
        type:Boolean,
        default:false,
    },
});


const blogModel = new mongoose.model("blog" , BlogSchema);

module.exports = blogModel;