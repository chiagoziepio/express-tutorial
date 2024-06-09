const express = require("express");
const router =  express.Router()

router.get("/", (req,res)=>{
    console.log(req.cookies);
    if(req.cookies.cook && req.cookies.cook === "abcde") {
        return res.status(200).send({
            item: "yam",
            price: 1000,
            pieceLeft: 2
        })
    }else{
        return res.status(403).send({msg: "valid cookie needed"})
    }
})

module.exports = router