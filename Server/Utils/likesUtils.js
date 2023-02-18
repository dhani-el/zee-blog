const DB = require("../Schemas/likeSchema")

async function addLike(data){
    await DB.create({...data});
    console.log("like added");
}

async function getLikes(blogTitle){
    const numberOlikes = await DB.count({title:blogTitle});
    console.log("current number of likes ",numberOlikes);
    return numberOlikes;
};

async function removeLike(data){
    await DB.deleteOne({username:data.username});
    console.log("like removed"); 
}

module.exports = {addLike, getLikes, removeLike}