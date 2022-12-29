const passport = require("passport");
const Strategy = require("passport-google-oauth20")
const DB = require("../Schemas/userSchema");

const baseUrl = "https://zeesblog.onrender.com"
module.exports = passport.use(new Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:"http://zeesblog.onrender.com/auth/oauth2/redirect/google"
},async function(accToken,reToken,profile, callback){
    const curatedData ={firstname : profile.name.givenName,
                        lastname:profile.name.familyName,
                        username:profile.displayName,
                        email: profile.emails[0].value,
                        hasPassword:false,};
    if(await userExists(curatedData.username)){
        console.log("does the user exist?" , userExists(curatedData.username));
       return callback(null,{...curatedData , hasPassword:true});
    }
    console.log("profile log", curatedData);
    callback(null,curatedData);
}));

passport.serializeUser(function(user,done){
    console.log(`user is being serialized`);
    done(null,{...user});
}
);

passport.deserializeUser(function(user,done){
    return done(null,{...user});
}
);


async function userExists(username){
    const data = await DB.find().where("username").equals(username).select("username");
    if (data.length == 0  ){  
          console.log("inside data.length is " , data.length);
        return false;
    }
    console.log("outside data.length is " , data.length);
    return true;
}