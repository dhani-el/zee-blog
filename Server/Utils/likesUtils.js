const DB = require("../Schemas/likeSchema")

async function addLike(data){
    let likedInitially = await DB.findOne({title:data.title,username:data.username});
    console.log("this is the data received",data);
    console.log("this is the initial length", likedInitially.length);
    if (likedInitially.length === 0) {
        console.log("this is the initial value", likedInitially);
        return -1;
    }
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