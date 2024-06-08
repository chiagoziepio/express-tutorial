const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000

const demoUsers = [
    {
    id: 1,
    name: "obi",
    username: "obi"
},
    {
    id: 2,
    name: "emeka",
    username: "emeka"
},
    {
    id: 3,
    name: "adanna",
    username: "adanna"
},
    {
    id: 4,
    name: "Jack",
    username: "Jack"
},
    {
    id: 5,
    name: "okey",
    username: "Okey"
}
]
app.get("/", (req, res)=>{
    res.send("welcome")
})

app.get("/api/users", (req,res)=>{
    const {filter, value} = req.query;
    console.log(filter, value);
    if(!filter || !value) return res.status(200).send(demoUsers);

    if(filter && value) return res.send(demoUsers.filter(user => user[ filter].includes(value)))
})

app.get("/api/users/:id", (req,res)=>{
    
    const parsedid = parseInt(req.params.id)
    if(isNaN(parsedid)) return res.send({mesg:` ${req.params.id} is not valid` }).status(400)
    const theUser = demoUsers.find( user => user.id === parsedid)
    if(!theUser) return res.sendStatus(400)
    res.send(theUser)
})

app.listen(PORT , ()=>{
    console.log(`app listenig on port ${PORT}`);
})