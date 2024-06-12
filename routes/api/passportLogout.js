const express = require("express")
const router = express.Router()


router.post("/", (req,res)=>{
    if(!req.user) res.sendStatus(401);
    console.log("loggin out");
    req.logOut((error)=>{
        if(error) res.sendStatus(400)
    });
res.status(200).send({msg:"you are logged out"})
});

module.exports  = router