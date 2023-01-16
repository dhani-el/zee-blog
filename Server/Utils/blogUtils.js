

async function getBlogs(DB , startIndex , limit = 5){
    const data = await DB.find().sort({_id:-1}).skip(startIndex * limit).limit(limit).select("title").select("genre").select("readTime" ).select("image").select("isPaid").select("body") ;
    return data;
}


async function getBlogPost(DB , title){
    const data = await DB.find().where("title").equals(title);
    return data;
}


module.exports = {getBlogs , getBlogPost}