const express = require("express");

const route = express.Router();

route.get("/",(req, res, next) =>{
    res.redirect("/addUser")
})

route.get("/addUser",(req, res, next) =>{
    res.render("addUser",{
        info: "Add User"
    })
})


module.exports = route;