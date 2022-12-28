

function isRegistrationComplete(req, res, next){
    if(!req.user.hasPassword){
        return res.redirect("http://localhost:7000/auth/oauth2/password");
    }
    next();
}

function isUserLoggedIn(req, res, next){
    if(!req.user){
      return res.redirect("http://localhost:7000/auth/oauth");
    }
    console.log("user is logged in");
    next()
}


module.exports = {isRegistrationComplete, isUserLoggedIn}