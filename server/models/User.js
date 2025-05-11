const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String
    },

    email:{
        type:String
    },

    image:{
        type:String
    }

})

module.exports = mongoose.model('social-login' , userSchema) // we got entry in DB from social-login name