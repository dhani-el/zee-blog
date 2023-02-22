const express   = require("express");
const router  = express.Router();
const {userExist} = require('../Utils/userUtils')


router.post("/exists" , async function(req,res){
    const result  = await userExist(req.body.username);
    res.json(result);
})




module.exports = router