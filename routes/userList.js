const express = require("express");

const route = express.Router();

const userList = [];

route.get("/userList",(req, res, next) =>{    
    res.render("userList",{
        info : "user List",
        users : userList
    })
})

route.post("/userList",(req, res, next) =>{   
    userList.push(
        req.body.user
    )
    res.render("userList",{
        info : "user List",
        users : userList
    })
})


module.exports = route;