const mongoose  = require('mongoose');



const BlogSchema = new mongoose.Schema({
    title:{
        type : String,
        required:true,
    },
    body:{
        type: String,
    },
    author:{
        type: String,
        default:"Susan Omono Adebayo"  
    },
    genre:{
        type: String,
    },
    readTime:{
        type: String, 
    },
    date:{
        type: String,
        default: new Date().toLocaleString()
    },
    image:{
        type: String,
        default:"no Image"
    },
    isPaid:{
        type:Boolean,
        default:false,
    },
});


const blogModel = new mongoose.model("blog" , BlogSchema);

module.exports = blogModel;