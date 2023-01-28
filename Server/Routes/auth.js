
// EXTERNAL IMPORTS
    const express = require("express");
    const router =  express.Router();
    const passport  = require("passport");
// LOCAL IMPORTS
    require("../Authentication/localoginUtils");
    require("../Authentication/googleLoginUtils");
    const DB = require("../Schemas/userSchema");
    const {aFieldIsEmpty , encryptPassword} = require("../Authentication/signupUtil");
// VARIABLES
    const baseUrl = "https://zeesblog.onrender.com"
// ENDPOINTS
router.post("/signup" , async function(req,res){
   if (aFieldIsEmpty(req.body)) {
        return res.send("a field is empty");
   } 
   console.log("is any field empty",aFieldIsEmpty(req.body))
   console.log(req.body)
   const hashedPassword = await encryptPassword(req.body.password);
   await DB.create({...req.body, password:hashedPassword});
   res.send("user created")
});

router.post("/oauth/signup" , async function(req,res){
   if (!req.body.password) {
        return res.send("password field is empty");
   } 
   req.user.hasPassword = true;
   const hashedPassword = await encryptPassword(req.body.password);
   await DB.create({firstname : req.user.firstname,
                    lastname : req.user.lastname,
                    username : req.user.username, 
                    password:hashedPassword});
   res.send("user created")
});

router.post("/login" , passport.authenticate("local",{
    successRedirect:"/blogs/0",
    failureRedirect:"/failure"
}));

router.get("/oauth", passport.authenticate("google" ,{scope:["profile email"]}));

router.get("/oauth2/redirect/google", passport.authenticate('google', {
    successRedirect: "/blogs/0",
    failureRedirect: "/login/0"
  }));

router.get('/oauth2/password', function(req, res){
    res.send("pass in your password");
});

module.exports = router;