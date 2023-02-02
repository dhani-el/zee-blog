const DB = require("../Schemas/likeSchema")

async function addLike(data){
    await DB.create({...data});
}

async function getLikes(blogTitle){
    const numberOlikes = await DB.find().where(title).equals(blogTitle).count();
    return numberOlikes;
};

module.exports = {addLike, getLikes}