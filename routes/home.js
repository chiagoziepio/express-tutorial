const express = require("express");
const router = express.Router()

router.get("/", (req, res)=>{
    res.cookie("cook", "abcde", {maxAge: 30000 });
    console.log(req.session);
    console.log(req.sessionID);
    req.session.visited = true
    res.status(201).send("welcome")
})

module.exports = router