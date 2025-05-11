const mongoose = require('mongoose')

const vendorSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    Account:{
        type:String,
        required:true
    },

    bankName:{
        type:String,
        required:true
    },

    addressL1:{
        type:String
    },

    addressL2:{
        type:String,
        required:true
    },

    city:{
        type:String,
    },

    country:{
        type:String
    },

    zip:{
        type:Number
    }

})

module.exports = mongoose.model("Vendor" , vendorSchema)