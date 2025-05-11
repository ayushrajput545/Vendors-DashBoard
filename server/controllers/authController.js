const { default: axios } = require("axios");
const { oauth2client } = require("../config/googleConfig");
const User = require("../models/User");
const jwt = require('jsonwebtoken')
require('dotenv').config()

exports.googleLogin = async (req , res)=>{

    try{

        // Send code to google server
        const { code } = req.query;
        const googleRes = await oauth2client.getToken(code);
        oauth2client.setCredentials(googleRes.tokens)

        // Recieve user info from google server
        const userRes = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`)
        const {email , name , picture} = userRes.data
        
        //create User in DB 
        let user = await User.findOne({email})

        // if user not find then create entry otherwise generate token and make them login
        if(!user){
            user = await User.create({name , email , image:picture})
        }

        const {_id} = user
        const token = jwt.sign({_id , email} , process.env.JWT_SECRET , {expiresIn:"12h"})

        return res.status(200).json({
            sucess:true,
            message:"Login Sucessful",
            token,
            user
        })
    }
    catch(err){

        console.log(err)
        return res.status(500).json({
            sucess:false,
            message:"Internal Server Error",
            error:err.message
        })


    }



}