

const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } = require("@aws-sdk/client-s3");  
const multer = require("multer");
const crypto = require("crypto");
const SGmail = require("@sendgrid/mail");

SGmail.setApiKey(process.env.SEND_GRID_KEY);

const BUCKET_NAME = process.env.BUCKET_NAME
const BUCKET_REGION = process.env.BUCKET_REGION
const BUCKET_ACCESS_ID = process.env.BUCKET_ACCESS_ID
const BUCKET_SECRET_ACCESS_KEY = process.env.BUCKET_SECRET_ACCESS_KEY
const S3CLIENT = new S3Client({
    credentials:{
        accessKeyId:BUCKET_ACCESS_ID,
        secretAccessKey:BUCKET_SECRET_ACCESS_KEY,
                },
    region : BUCKET_REGION,
});
const companyEmail = "ukuhoromotayo@gmail.com"
const companyName = "ZEES Blog"

const upload  = multer({Storage: multer.memoryStorage()});

async function saveImageToS3(imageName, buffer , mimetype){
    const params  = {
        Bucket: BUCKET_NAME,
        Key: imageName,
        Body: buffer,
        ContentType: mimetype
    }
    const command = new PutObjectCommand(params);
    await S3CLIENT.send(command);
}

function randomBytes(bytes = 32){
    return crypto.randomBytes(bytes).toString('hex');
}

async function getImageLinkFromS3(imageName){

        const params = {Bucket: BUCKET_NAME, Key:imageName}
        const command = new GetObjectCommand(params);
        const URL = await getSignedUrl(S3CLIENT , command , {expiresIn : 3600});

    return URL;
}

async function deleteImageFromS3(imageName){
    const params = {Bucket: BUCKET_NAME, Key:imageName}
    const command = new DeleteObjectCommand(params);
    await S3CLIENT.send(command);
}

async function sendEmail(email, subject , body , html = "<p><p/>"){
    const msg = {
        to: email,
        from: {
            name:companyName,
            email: companyEmail},
        subject: subject,
        text:body,
        html:html,
    };
    await SGmail.send(msg);
} 

async function sendEmails(emails, subject , body , html = "<p><p/>"){
    emails.forEach(async email => {
        const msg = {
        to: email,
        from: {
            name:companyName,
            email: companyEmail},
        subject: subject,
        text:body,
        html:html,
    };
    await SGmail.send(msg);
    });
    
}

function isAnAdmin(adminName){
    switch (admin) {
        case "susan": return true;
        case "daniel": return true;
        case "rashad": return true;
        default: return false;
    }
}

module.exports = {upload , saveImageToS3 , getImageLinkFromS3 , deleteImageFromS3, randomBytes,sendEmail,sendEmails,isAnAdmin};