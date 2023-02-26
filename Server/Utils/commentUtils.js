

async function getComments(DB ,title , startIndex = 0 , limit = 20 ){
    const data = await DB.find().sort({_id:-1}).where("title").equals(title).skip(startIndex * limit).limit(limit);
    return data;
}


async function uploadComment(DB , data){
    await DB.create({...data});
}




module.exports = {getComments , uploadComment}