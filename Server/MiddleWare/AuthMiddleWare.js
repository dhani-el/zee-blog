const baseUrl = "https://zeesblog.onrender.com"

function isRegistrationComplete(req, res, next){
    if(!req.user.hasPassword){
        return res.redirect("https://zeesblog.onrender.com/auth/oauth2/password");
    }
    next();
}

function isUserLoggedIn(req, res, next){
    if(!req.user){
      return res.redirect("https://zeesblog.onrender.com/auth/oauth");
    }
    console.log("user is logged in");
    next()
}


module.exports = {isRegistrationComplete, isUserLoggedIn}