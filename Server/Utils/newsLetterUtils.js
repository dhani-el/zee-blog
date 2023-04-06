const DB = require("../Schemas/newsLetterSchema");


async function addEmail(email, name){
    await DB.create({email:email, name:name});
}

module.exports = addEmail