

async function getBlogs(DB , startIndex , limit = 5){
    const data = await DB.find().sort({_id:-1}).skip(startIndex * limit).limit(limit) ;
    return data;
}


async function getBlogPost(DB , title){
    const data = await DB.find().where("title").equals(title);
    return data;
}

async function getGenres(DB , genre, startIndex , limit = 5){
    const data = await DB.find().where("genre").equals(genre).sort({_id:-1}).skip(startIndex * limit).limit(limit);
    return data;
}

async function getSearchResult(DB, title){
    const searchResult = await DB.find({title:title});
    return searchResult;
}

module.exports = {getBlogs , getBlogPost, getGenres, getSearchResult}