const express = require("express");
const router = express.Router();
const passportUse = require("../../middlewares/local-strategies");


router.post("/", passportUse.authenticate("local"),async(req,res)=>{
    console.log(`form auth:${req.user}`)

    res.sendStatus(200)
});

module.exports = router