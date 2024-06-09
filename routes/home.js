const express = require("express");
const router = express.Router()

router.get("/", (req, res)=>{
    res.cookie("cook", "abcde", {maxAge: 30000})
    res.status(201).send("welcome")
})

module.exports = router