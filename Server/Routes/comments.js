const express = require("express");
const DB = require("../Schemas/commentSchema");
const router = express.Router();
const {getComments,uploadComment} = require("../Utils/commentUtils");



router.get("/:title/:index" , async function(req, res){
    res.json(await getComments(DB , req.params.index , req.params.title));
});

router.post("/post" , async function(req, res){
    if(req.user !== undefined ){
        const data = {
            title: req.body.title,
            username: req.user["0"].name,
            body: req.body.comment
        }
        console.log(req.body);
        console.log(req.user["0"].name);
        await uploadComment(DB , data)
        return res.send("comment successfully sent ");
    }
    return res.send(" you need to be logged in to comment ")

});




module.exports = router