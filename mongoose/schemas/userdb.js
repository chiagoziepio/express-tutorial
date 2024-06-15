const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:{ 
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true
    },
    username: mongoose.Schema.Types.String,
    password:{
        type: mongoose.Schema.Types.Number,
        required: true
    }
})

const user = mongoose.model("user", userSchema)

module.exports = user