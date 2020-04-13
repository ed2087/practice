const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const routeAddUser = require("./routes/addUsers.js");
const routeUserList = require("./routes/userList.js");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: false}));

//allow for the use of files
app.use(express.static(path.join(__dirname, "public")))

app.use(routeAddUser)

app.use(routeUserList)

app.use((req, res, next) =>{
    console.log(req.url)
    res.render("404",{
        info : "Page Not Found"
    });
})

app.listen(3000)