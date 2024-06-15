const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:{ 
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true
    },
    username:{
        type: mongoose.Schema.Types.String,
        required: true
    },
    password:{
        type: mongoose.Schema.Types.String,
        required: true
    }
})

const user = mongoose.model("user", userSchema)

module.exports = user