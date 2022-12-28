const bcrypt = require("bcryptjs");

function aFieldIsEmpty(formData){
    if ((formData.firstname == "")||(formData.lastname == "")||(formData.username == "")||(formData.email== "")||(formData.password=== "")) {
        return true;
    }
    return false;
}

async function encryptPassword(password){
    const hashedPassword  = await bcrypt.hash(password , 10);
    return hashedPassword;
}




module.exports = {aFieldIsEmpty , encryptPassword}