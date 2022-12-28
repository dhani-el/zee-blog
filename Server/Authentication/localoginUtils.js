const passport = require("passport");
const Strategy  = require("passport-local");
const bcrypt = require("bcryptjs");

const DB = require("../Schemas/userSchema");


module.exports = passport.use(new Strategy(async function _verify(username,password,done){
    if (aFieldIsEmpty(username,password)) {
            return done(new Error("a field is empty"));
    }
    if (await userDoesNotExist(username)) {
            return done(new Error("user does not exist"));
    }
    if (await passwordIsIncorrect(password ,username)) {
            return done(null, false);
    }
    const user = await DB.find().where("username").equals(username).select("firstname").select("lastname").select("username").select("email");
    return done(null , user);
}));


passport.serializeUser(function(user , done){
    // console.log("inside serializer this is the user",user);
    process.nextTick(function(){
       return done(null , {...user})
    });
})

passport.deserializeUser(function(user , done){
    // console.log("inside deserializer this is the user",user);
    process.nextTick(function(){
       return done(null , {...user})
    });
});

// FUNCTIONS
function aFieldIsEmpty(username , password){
    if ((username == "") || (password == "")) {
        return true;
    }
    return false;
}

async function userDoesNotExist(username){
    const data = await DB.find().where("username").equals(username).select("username");
    if (data.length == 0  ){
        return true;
    }
    return false;
}

async function passwordIsIncorrect(password , username){
    const hashed = await DB.find().where("username").equals(username).select("password");
   return !(await bcrypt.compare(password ,hashed[0].password ))
}