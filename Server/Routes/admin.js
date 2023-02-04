const express  = require("express")
const router  = express.Router();         
const BLOG_DB = require("../Schemas/blogSchema");
const USERS = require("../Schemas/userSchema")
const{upload , saveImageToS3 ,deleteImageFromS3, randomBytes,sendEmail,sendEmails} = require("../Utils/adminUtils");

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

router.post("/newsletter" , async function(request , response){
    console.log(request.body);
    const recipients = await USERS.find().where("newsLetter").equals(true).select("email");
    try{
       await sendEmails(recipients, request.body.subject, request.body.textBody );
       res.send("email sent");
    }catch(e){
        console.log(e.message);
    }
})


router.delete("/delete/:title", async function(req, res){
   const blogTitle = req.params.title;
   const blogImageName = await BLOG_DB.find().where("title").equals(blogTitle).select("image");
   await deleteImageFromS3(blogImageName[0].image);
   await BLOG_DB.deleteOne({title:blogTitle});
   res.send("blog post deleted");
})


module.exports = router