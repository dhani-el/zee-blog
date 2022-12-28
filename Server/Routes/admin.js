const express  = require("express")
const router  = express.Router();         
const BLOG_DB = require("../Schemas/blogSchema");
const{upload , saveImageToS3 , randomBytes} = require("../Utils/adminUtils");

router.use(express.json());
router.use(express.urlencoded({extended:false}));


router.post("/post", upload.single("image") ,async function(req,res){
    const imageName = await randomBytes(); 
    await saveImageToS3(imageName , req.file.buffer , req.file.mimetype);
    await BLOG_DB.create({...req.body , image: imageName});
    res.send("post successful")
})



module.exports = router