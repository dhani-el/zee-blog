

async function getComments(DB , startIndex ,title , limit = 5 ){
    const data = await DB.find().where("title").equals(title).skip(startIndex * limit).limit(limit);
    return data;
}


async function uploadComment(DB , data){
    await DB.create({...data});
}




module.exports = {getComments , uploadComment}