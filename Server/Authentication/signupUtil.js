const bcrypt = require("bcryptjs");

function aFieldIsEmpty(formData){
    if ((formData.name === "")||(formData.email=== "")||(formData.password=== "")) {
        return true;
    }
    return false;
}

async function encryptPassword(password){
    const hashedPassword  = await bcrypt.hash(password, 10);
    return hashedPassword;
}




module.exports = {aFieldIsEmpty , encryptPassword}