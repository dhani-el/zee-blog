const DB = require("../Schemas/likeSchema")

async function addLike(data){
    await DB.create({...data});
}

async function getLikes(blogTitle){
    const numberOlikes = await DB.find().where("title").equals(blogTitle).count();
    console.log(numberOlikes);
    return numberOlikes;
};

async function removeLike(data){
    await DB.deleteOne({username:data.username});
}

module.exports = {addLike, getLikes, removeLike}