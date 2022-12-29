
// EXTERNAL IMPORTS
    const express = require("express");
    const router = express.Router();

// INTERNAL IMPORTS
    const db_blog = require("../Schemas/blogSchema");
    const {getBlogs, getBlogPost} = require("../Utils/blogUtils");
    const {getImageLinkFromS3} = require("../Utils/adminUtils");
    const {isRegistrationComplete,isUserLoggedIn} = require("../MiddleWare/AuthMiddleWare")
// ROUTING  ENDPOINTS
    router.get("/:page" , async function(req,res){
        const data = await getBlogs(db_blog , req.params.page);
        console.log("authentication status",req.isAuthenticated());
        // console.log("this is the user",req.user);
        console.log("this is the session id",req.sessionID);

        for (const post of data) {
            post.image = (await getImageLinkFromS3(post.image));
            // console.log("this is a post",post);
        }
        // console.log(data);
        res.json(data);
    });

    router.get("/post/:id", async function(req,res){
        const data = await getBlogPost(db_blog , req.params.id);
        console.log(req.user);
        console.log(req.sessionID);
         data[0].image = await getImageLinkFromS3(data[0].image);
        res.json( data);
    });
 
// EXPORT
module.exports = router;