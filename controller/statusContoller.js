 const HandleShowStaus = (req, res)=>{
    req.sessionStore.get(req.sessionID, (err, session)=>{
        console.log(session);
    })
   req.session.user? res.status(200).send(`${req.session.user.username} is logged in`) :
   res.status(400).send({msg: "kindly login"})
 }

 module.exports  = HandleShowStaus