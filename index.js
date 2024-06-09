const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000

const demoUsers = require("./model/userdb")
app.use(express.json())


app.get("/", (req, res)=>{
    res.send("welcome")
})
// for get all and post routes
app.use("/api/users", require("./routes/api/users"));
// for put and patch and get one users
app.use("/api/users/:id", require("./routes/api/users"));


app.listen(PORT , ()=>{
    console.log(`app listenig on port ${PORT}`);
})