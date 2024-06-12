const express = require("express")
const router = express.Router()

router.get("/", (req,res)=>{
    console.log("from api/auth/status i.e the passport status ");
    console.log(req.user);
     return req.user? res.send(req.user):res.sendStatus(401)
});

module.exports = router