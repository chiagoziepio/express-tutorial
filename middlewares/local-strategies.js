const passport = require("passport");
const { Strategy } = require("passport-local");
const demoUsers = require("../model/userdb");
const user = require("../mongoose/schemas/userdb")

passport.serializeUser((user, done)=>{
    console.log("inside the serializer");
    console.log(user);
    done(null, user._id)
})
passport.deserializeUser(async(_id, done)=>{
    console.log("inside the Deserializer");
    console.log(`deseralizing user ${_id}`);
 try {
    const findUser = await user.findById(_id)
    if(!findUser) throw new Error("user not found");
    done(null, findUser)
 } catch (error) {
    done(error,null)
 }
})

 const passportUse = passport.use(
    new Strategy( async(username, password, done)=>{
        console.log(`username: ${username}`);
        console.log(`password: ${password}`);
        try {
            const findUser = await user.findOne({username})
            if(!findUser) throw new Error("user not found");
            if(findUser.password !== password) throw new Error("username or password wrong");

            done(null, findUser)
        } catch (error) {
            done(error, null)
        }
    })
)

module.exports = passportUse