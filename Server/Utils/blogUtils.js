

async function getBlogs(DB , startIndex , limit = 5){
    const data = await DB.find().skip(startIndex * limit).limit(limit).select("title").select("genre").select("readTime" ).select("image").select("isPaid") ;
    return data;
}


async function getBlogPost(DB , title){
    const data = await DB.findOne().where("title").equals(title);
    return data;
}


module.exports = {getBlogs , getBlogPost}