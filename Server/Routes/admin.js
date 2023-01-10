const express  = require("express")
const router  = express.Router();         
const BLOG_DB = require("../Schemas/blogSchema");
const{upload , saveImageToS3 , randomBytes} = require("../Utils/adminUtils");

// router.use(express.json());
// router.use(express.urlencoded({extended:false}));


router.post("/post", upload.single("image") ,async function(req,res){
    console.log("this is req . body",req.body);
    // console.log("this is req . files",req.file);
    const imageName = await randomBytes();

    if(!req.file.buffer){
        console.log("no buffer");
    return res.send("no buffer")
}
    await saveImageToS3(imageName , req.file.buffer , req.file.mimetype);
    console.log("this is the image name",imageName);
    console.log("req.body is " , req.body);
    await BLOG_DB.create({...req.body , image: imageName});
    res.send("post successful");
});



module.exports = router