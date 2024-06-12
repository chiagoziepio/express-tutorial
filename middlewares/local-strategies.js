const passport = require("passport");
const { Strategy } = require("passport-local");
const demoUsers = require("../model/userdb")

passport.serializeUser((user, done)=>{
    console.log("inside the serializer");
    console.log(user);
    done(null, user.id)
})
passport.deserializeUser((id, done)=>{
    console.log("inside the Deserializer");
    console.log(`deseralizing user ${id}`);
 try {
    const findUser = demoUsers.find(user => user.id === id);
    if(!findUser) throw new Error("user not found");
    done(null, findUser)
 } catch (error) {
    done(error,null)
 }
})

 const passportUse = passport.use(
    new Strategy((username, password, done)=>{
        console.log(`username: ${username}`);
        console.log(`password: ${password}`);
        try {
            const findUser = demoUsers.find(user => user.username === username);
            if(!findUser) throw new Error("user not found");
            if(findUser.password !== password) throw new Error("username or password wrong");

            done(null, findUser)
        } catch (error) {
            done(error, null)
        }
    })
)

module.exports = passportUse