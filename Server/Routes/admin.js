const express  = require("express")
const router  = express.Router();         
const BLOG_DB = require("../Schemas/blogSchema");
const{upload , saveImageToS3 , randomBytes} = require("../Utils/adminUtils");

router.use(express.json());
router.use(express.urlencoded({extended:false}));


router.post("/post", upload.single("image") ,async function(req,res){
    const imageName = req.files.buffer ? await randomBytes() :  "no Image"

    if(req.files.buffer){
    await saveImageToS3(imageName , req.files.buffer , req.files.mimetype);
    console.log("this is the image name",imageName);
}
    console.log("req.body is " , req.body);
    await BLOG_DB.create({...req.body , image: imageName});
    res.send("post successful");
});



module.exports = router