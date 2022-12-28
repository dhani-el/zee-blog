const express = require("express");
const DB = require("../Schemas/commentSchema");
const router = express.Router();
const {getComments,uploadComment} = require("../Utils/commentUtils");



router.get("/:title" , async function(req, res){
    res.json(await getComments(DB , 0 , req.params.title));
});

router.post("/" , async function(req, res){
    console.log(req.body);
    await uploadComment(DB , {...req.body})
    res.json("comment successfully sent ");
});




module.exports = router