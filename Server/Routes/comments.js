const express = require("express");
const DB = require("../Schemas/commentSchema");
const router = express.Router();
const {getComments,uploadComment} = require("../Utils/commentUtils");



router.get("/:title/:index" , async function(req, res){
    res.json(await getComments(DB , index , req.params.title));
});

router.post("/post" , async function(req, res){
    if(req.user === undefined ){
        return res.send(" you need to be logged in to comment ")
    }
    const data = {
        title: req.body.title,
        username: req.user.name,
        body: req.body.comment
    }
    console.log(req.body);
    console.log(req.user);
    await uploadComment(DB , data)
    res.send("comment successfully sent ");
});




module.exports = router