// Imports

    // EXTERNAL DEPENDENCIES
        require("dotenv").config();
        const express = require("express");
        const mongoose = require('mongoose');
        const passport  = require("passport");
        const session = require("express-session");
        const port  = process.env.PORT || 3000;
        const app = express();
    // MIDDLEWARE
        app.use(express.urlencoded({extended:false}));
        app.use(express.json());
        app.use(session({
            secret: process.env.SESSION_SECRET,
            resave: false,
            saveUninitialized:false,
            cookie:{secured : true}
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

mongoose.connect(process.env.DATABASE_URI, function(){
    console.log("Database Online");
})

// ROUTING
app.use("/admin" ,adminRoute);
app.use("/blogs" ,blogRoute);
app.use("/user" ,userRoute);
app.use("/comments" ,commentsRoute);
app.use("/auth" ,authRoute);


app.listen(port , function(){
    console.log(`Server is online at port ${port}` );
})