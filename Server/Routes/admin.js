const express  = require("express")
const router  = express.Router();         
const BLOG_DB = require("../Schemas/blogSchema");
const USERS = require("../Schemas/userSchema")
const SOME_EMAILS = require("../Schemas/newsLetterSchema")
const{upload , saveImageToS3 ,deleteImageFromS3, randomBytes,sendEmails,isAnAdmin} = require("../Utils/adminUtils");

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
    await BLOG_DB.create({...req.body , image: imageName });
    res.send("post successful");
});

router.post("/newsletter" , async function(request , response){
    console.log(request.body);
    // if(req.user !== undefined && isAnAdmin(req.user["0"].name)){
    const first_Array_of_emails = await USERS.find().where("newsLetter").equals(true).select("email");
    const second_Array_of_emails = await SOME_EMAILS.find().select("email");
    const recipients = [...first_Array_of_emails, ...second_Array_of_emails];
    try{
       await sendEmails(recipients, request.body.subject, request.body.textBody );
       response.send("email sent");
    }catch(e){
        console.log(e.message);
    }
}
        // res.send("cheeky corny bastard")
// }
)


router.delete("/delete/:title", async function(req, res){
    if(req.user !== undefined && isAnAdmin(req.user["0"].name)){
         const blogTitle = req.params.title;
         const blogImageName = await BLOG_DB.find().where("title").equals(blogTitle).select("image");
         await deleteImageFromS3(blogImageName[0].image);
         await BLOG_DB.deleteOne({title:blogTitle});
         res.send("blog post deleted");
    }
    
    res.send("cheeky corny bastard")
})


module.exports = router