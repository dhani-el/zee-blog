const bcrypt = require("bcryptjs");

function aFieldIsEmpty(formData){
    console.log("form data : ",formData);
    if ((formData.name === undefined )||(formData.email=== undefined )||(formData.password=== undefined)) {
        return true;
    }
    return false;
}

async function encryptPassword(password){
    const hashedPassword  = await bcrypt.hash(password, 10);
    return hashedPassword;
}




module.exports = {aFieldIsEmpty , encryptPassword}