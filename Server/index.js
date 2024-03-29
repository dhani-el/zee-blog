// Imports

    // EXTERNAL DEPENDENCIES
        require("dotenv").config();
        const express = require("express");
        const mongoose = require('mongoose');
        const passport  = require("passport");
        const bodyParser = require("body-parser");
        const session = require("express-session");
        const MongoStore  = require("connect-mongo");
        const CORS = require("cors");
        const path = require('path')
        const port  = process.env.PORT || 3000;
        const app = express();
    // MIDDLEWARE
         app.enable('trust proxy', 1)
         app.use(CORS({
        origin:["https://www.zeesblog.com.ng","http://localhost:3000","https://zees-blog.netlify.app",],
        methods:['GET','POST','PUT','DELETE'],
        allowedHeaders:["Content-Type","Authorization"],
        credentials:true,
            }));
        app.use(bodyParser.urlencoded({extended:false}));
        app.use(bodyParser.json());
        app.use(session({
            secret: process.env.SESSION_SECRET,
            resave: false,
            saveUninitialized:false,
            cookie:{
                sameSite:'strict',
                secure : true,
                httpOnly: false,
                credentials:"include",
            },
            store: MongoStore.create({
                mongoUrl : process.env.DATABASE_URI,
                ttl: 2 * 24 * 60 * 60,
                autoRemove: 'native',
                touchAfter: 24 * 3600
            })
        }));
        app.use(passport.initialize());
        app.use(passport.session())
        app.use(passport.authenticate("session"));

        
    // PACKAGE DEPENDENCIES
        const adminRoute  = require("./Routes/admin");
        const blogRoute = require("./Routes/blog");
        const userRoute = require("./Routes/user");
        const commentsRoute = require("./Routes/comments");
        const authRoute = require("./Routes/auth");
        const likeRoute = require("./Routes/likes");

mongoose.set('strictQuery', false);

mongoose.connect(process.env.DATABASE_URI, function(){
    console.log("Database Online");
});

// ROUTING
app.use("/admin/api" ,adminRoute);
app.use("/blogs/api" ,blogRoute);
app.use("/user/api" ,userRoute);
app.use("/comments/api" ,commentsRoute);
app.use("/auth/api" ,authRoute);
app.use("/likes/api" ,likeRoute);
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
  });


app.listen(port , function(){
    console.log(`Server is online at port ${port}` );
})