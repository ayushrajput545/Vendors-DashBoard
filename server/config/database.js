const mongoose = require('mongoose')
require('dotenv').config()

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log("DB CONNECTION SUCCESFULL"))
    .catch((err)=>{
        console.log("Failed to connect DB")
        console.log(err)
    })
}

module.exports = dbConnect