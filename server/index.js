const express = require('express')
const app = express()
require('dotenv').config()
const dbConnect = require('./config/database')
const authRoutes = require('./routes/authRoutes')
const cors = require('cors')
const vendorRoutes = require('./routes/vendorRoutes')



PORT = process.env.PORT || 8080

dbConnect()

app.use(cors())
app.use(express.json())
app.use('/auth' , authRoutes)
app.use('/api/v1' , vendorRoutes)


app.listen(PORT , ()=>{
    console.log(`Server is running at PORT No. ${PORT}`)
})