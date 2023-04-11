const DB = require("../Schemas/newsLetterSchema");


async function addEmail(email){
    await DB.create({email:email});
}

module.exports = addEmail