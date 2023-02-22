const DB = require("../Schemas/userSchema");




async function userExist(username){
    console.log("username passsed is" , username);
    const data = await DB.find().where("name").equals(username).select("name");
    if (data.length == 0  ){
        return false;
    }
    return true;
}

module.exports = {userExist}