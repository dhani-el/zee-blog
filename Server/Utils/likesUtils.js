const DB = require("../Schemas/likeSchema")

async function addLike(data){
    let likedInitially = await DB.find({title:data.title,username:data.username});
    console.log("this is the data received",data);
    console.log("this is the initial length", likedInitially.length);
    console.log("this is the initial value", likedInitially);
    if (likedInitially.length !== 0) {
        await DB.create({...data});
        return console.log("like added");
    }
    console.log("ban kai");
    return -1
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