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
        const port  = process.env.PORT || 3000;
        const app = express();
    // MIDDLEWARE
         app.enable('trust proxy')
         app.use(CORS({
        origin:"http://localhost:3000",
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
                sameSite:"none",
                secure : "false",
                httpOnly: true,
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
app.use("/admin" ,adminRoute);
app.use("/blogs" ,blogRoute);
app.use("/user" ,userRoute);
app.use("/comments" ,commentsRoute);
app.use("/auth" ,authRoute);
app.use("/likes" ,likeRoute);


app.listen(port , function(){
    console.log(`Server is online at port ${port}` );
})