const express = require("express");
const app = express();

const  logger = require("./middlewares/logEvent")
const demoUsers = require("./model/userdb");
const cookieParser = require("cookie-parser");
const session = require("express-session")

const PORT = process.env.PORT || 5000
app.use(express.json());

app.use(cookieParser())
app.use(session({
    secret: "paddy naaa",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 60000 * 60
    }

}))
app.use(logger)

// for home page
app.use("/", require("./routes/home"))
//for authenticating loging in
app.use("/auth", require("./routes/auth"))
// showing if logged in
app.use("/auth/status", require("./routes/status"));
// showing cart if logged in
app.use("/api/cart", require("./routes/api/cart"))
// for products routes
app.use("/api/products", require("./routes/api/product"))
// for get all and post routes
app.use("/api/users", require("./routes/api/users"));
// for put and patch and get one users
app.use("/api/users/:id", require("./routes/api/users"));


app.listen(PORT , ()=>{
    console.log(`app listenig on port ${PORT}`);
})