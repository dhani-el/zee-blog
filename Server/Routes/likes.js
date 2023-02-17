const express = require("express");
const router = express.Router();
const {addLike , getLikes, removeLike} = require("../Utils/likesUtils");


router.post("/post" , async function(req, res){
    if (req.user === undefined) {
        return res.send("you need to be logged in to like a post");
    }
    console.log(req.body.title , " is about to get a like");
    console.log(req.user["0"].name , " is about to drop a like ");
    const data = {title : req.body.title , username: req.user["0"].name}
    await addLike(data);
});

router.delete("/delete" , async function(req, res){
    if (req.user === undefined) {
        return res.send("you need to be logged in to like a post");
    }
    const data = {title : req.body.title , username: req.user["0"].name}
    await removeLike(data);
});

router.get("/:title" , async function(req, res){
   let likes =  await getLikes(req.params.title);
   console.log("sending likes of value" , await likes);
   res.json(await likes)
});

module.exports = router