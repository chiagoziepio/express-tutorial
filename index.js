const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000

app.get("/home.html", (req, res)=>{
    res.send("welcome")
})

app.get("/api/users", (req,res)=>{
    res.status(200).send([
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
        name: "ada",
        username: "ada"
    },
])
})

app.listen(PORT , ()=>{
    console.log(`app listenig on port ${PORT}`);
})