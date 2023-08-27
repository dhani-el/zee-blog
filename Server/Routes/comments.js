const express = require("express");
const Db = require("../Schemas/commentSchema");
const router = express.Router();
const {getComments,uploadComment} = require("../Utils/commentUtils");



router.get("/:title/:index" , async function(req, res){
    res.json(await getComments(Db  , req.params.title, req.params.index));
});

router.post("/post" , async function(req, res){
        const data = {
            title: req.body.title,
            username: req.user["0"].name,
            body: req.body.comment
        }
        console.log(req.body);
        console.log(req.user["0"].name);
        await uploadComment(Db , data)
        return res.json(await getComments(Db , req.body.title));

});




module.exports = router