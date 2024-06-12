const express = require("express");
const router = express.Router();
const passportUse = require("../../middlewares/local-strategies")

router.post("/", passportUse.authenticate("local"),(req,res)=>{
    res.sendStatus(200)
});

module.exports = router