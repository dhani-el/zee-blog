const express = require("express");
const router = express.Router();
const {addLike , getLikes, removeLike} = require("../Utils/likesUtils");


router.post("/post" , async function(req, res){
    if (req.user === undefined) {
        return res.send("you need to be logged in to like a post");
    }
    const data = {title : req.body.title , username: req.user.name}
    await addLike(data);
});

router.delete("/delete" , async function(req, res){
    if (req.user === undefined) {
        return res.send("you need to be logged in to like a post");
    }
    const data = {title : req.body.title , username: req.user.name}
    await removeLike(data);
});

router.get("/:title" , async function(req, res){
   const likes =  await getLikes(req.params.title);
   res.json(likes)
});

module.exports = router