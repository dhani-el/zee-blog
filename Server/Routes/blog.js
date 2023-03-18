
// EXTERNAL IMPORTS
    const express = require("express");
    const router = express.Router();

// INTERNAL IMPORTS
    const db_blog = require("../Schemas/blogSchema");
    const {getBlogs, getBlogPost, getGenres,getSearchResult} = require("../Utils/blogUtils");
    const {getImageLinkFromS3} = require("../Utils/adminUtils");
    const {isRegistrationComplete,isUserLoggedIn} = require("../MiddleWare/AuthMiddleWare")
// ROUTING  ENDPOINTS
    router.get("/:page" , async function(req,res){
        const data = await getBlogs(db_blog , req.params.page);
        console.log("authentication status",req.isAuthenticated());
        if(req.user !== undefined){
            console.log(req.user);
        }
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

    router.get("/genres/:genre/:index", async function(req, res){
        const data = await getGenres(db_blog, req.params.genre , req.params.index);
        res.json(data);
    });

    router.get("/search/:title", async function(req, res){
        console.log("this is what is to be searched for", req.params.title);
       const searchResult = await getSearchResult(db_blog , req.params.title);
       console.log(searchResult);
       return res.json(searchResult);
    });
 
// EXPORT
module.exports = router;