const demoUsers = require("../model/userdb");
const user = require("../mongoose/schemas/userdb") 
const bcrypt = require("bcryptjs")

const handleGetAllUser = (async(req,res)=>{
    const {filter, value} = req.query;
    console.log(filter, value);
    const userdb = await user.find()
    if(!filter || !value) return res.status(200).send(userdb);
    /* find(user => user[ filter].includes(value)) */
    if(filter && value) {
       await user.find({filter: value})
        return res.send(userdb)
    }
})
const handlePostNewUser =  (async(req,res)=>{
    console.log(req.body);
    const { name, username, password } = req.body
    if(!name || !username || !password) return res.status(400).send({msg:"no blank should be left empty"})
    const hashPwd =await bcrypt.hash(password, 10)
    const newUser = new user({
        
       name,
       username,
       password: hashPwd

    })
    try {
        
        const savedUser = await newUser.save()
    
       return res.status(201).send(savedUser)
    } catch (error) {
        console.log(error);
        res.status(400).send({msg: "bad request"})
    }
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
const handlePatch = (async(req,res)=>{
    const{ body, params} = req 
    const {id} = params;
    
    const the_user = await user.findByIdAndUpdate(id, body,{new:true})
    /* const parsedId = parseInt(id);
    if(isNaN(parsedId)) res.sendStatus(400); 

    const finduser = demoUsers.findIndex(user => user.id === parsedId);*/
    if(!the_user) res.status(400).send({msg: "no user found"});
    /* console.log(finduser);
    demoUsers[finduser] = {...demoUsers[finduser], ...body} */
    res.status(204).send(the_user)
});

const handleGetAUser = (async(req,res)=>{
    
    const id = req.params.id;
    const the_User = await user.findById(id);
    /* if(isNaN(parsedid)) return res.send({mesg:` ${req.params.id} is not valid` }).status(400)
    const theUser = demoUsers.find( user => user.id === parsedid) */
    if(!the_User) return res.status(400).send({msg: "user not found"});
    res.send(the_User)
})

module.exports = {
    handleGetAllUser,
    handlePostNewUser,
    handleGetAUser,
    handlePatch,
    handlePut
}