 const demoUsers = require("../model/userdb")
 const handleAuth = (req, res, next)=>{
    const {body :{username, password}} = req;
    if(!username || !password) return res.status(400).send({msg: "username and password needed"});

    const findUser = demoUsers.find(user => user.username === username);
    console.log(findUser);
    if(!findUser || findUser.password !== password) return res.status(401).send({msg: "valid credential needed"});

    req.session.user = findUser;
    return res.status(200).send(findUser)
 } 


 module.exports = handleAuth