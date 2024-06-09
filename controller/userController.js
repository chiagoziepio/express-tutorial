const demoUsers = require("../model/userdb");

const handleGetAllUser = ((req,res)=>{
    const {filter, value} = req.query;
    console.log(filter, value);
    if(!filter || !value) return res.status(200).send(demoUsers);

    if(filter && value) return res.send(demoUsers.filter(user => user[ filter].includes(value)))
})
const handlePostNewUser = ((req,res)=>{
    console.log(req.body);
    const { name, username } = req.body
    const newUser = {
        id: demoUsers.length ? demoUsers[demoUsers.length - 1].id + 1 : 1,
       name,
       username

    }
    demoUsers.push(newUser)

    res.send(demoUsers).status(201)
});

const handlePut =((req,res)=>{
    const{ body, params} = req 
    const {id} = params;
    const {name, username} = body

    const parsedId = parseInt(id);
    if(isNaN(parsedId)) res.sendStatus(400);

    const finduser = demoUsers.findIndex(user => user.id === parsedId);
    if(finduser === -1) res.status(400).send({msg: "no user found"});
    console.log(finduser);

    demoUsers[finduser] = {id:parsedId , name, username};
    res.send(demoUsers)
})
const handlePatch = ((req,res)=>{
    const{ body, params} = req 
    const {id} = params;
    

    const parsedId = parseInt(id);
    if(isNaN(parsedId)) res.sendStatus(400);

    const finduser = demoUsers.findIndex(user => user.id === parsedId);
    if(finduser === -1) res.status(400).send({msg: "no user found"});
    console.log(finduser);
    demoUsers[finduser] = {...demoUsers[finduser], ...body}
    res.status(204).send(demoUsers)
});

const handleGetAUser = ((req,res)=>{
    
    const parsedid = parseInt(req.params.id)
    if(isNaN(parsedid)) return res.send({mesg:` ${req.params.id} is not valid` }).status(400)
    const theUser = demoUsers.find( user => user.id === parsedid)
    if(!theUser) return res.sendStatus(400)
    res.send(theUser)
})

module.exports = {
    handleGetAllUser,
    handlePostNewUser,
    handleGetAUser,
    handlePatch,
    handlePut
}