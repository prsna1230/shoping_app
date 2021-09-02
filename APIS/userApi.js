// create min express app
const express = require("express")
const userApiObj = express.Router()
const expressAsyncHandler=require('express-async-handler')
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const userdpObj = require("./middleware/adduserImage")
// body parser middleware
userApiObj.use(express.json())


let userCollection;
// get usercollection object
userApiObj.use((req,res,next)=>{
    userCollection=req.app.get("userCollection")
    next()
})



// user registration
userApiObj.post("/register",userdpObj.single('photo'), expressAsyncHandler(async(req,res)=>{

    const newUser = JSON.parse(req.body.userObj);
    // add image url to productObj
    newUser.profileimage=req.file.path;
    // get user from req.body
    let user = await userCollection.findOne({username:newUser.username})

    // if user existed, send res as "user existed"
    if(user!==undefined){
        res.send({message:"User Existed"})
        // alert("Username Already Existed")
    }
    else{
        // hash password
        let hashedPassword = await bcryptjs.hash(newUser.password,6)
        // replace plain password to usercollection
        newUser.password=hashedPassword;
        // insert userObj to usercollection
        await userCollection.insertOne(newUser)
        // send res
        res.send({message:"Success"})
    }
}))


// user Login
userApiObj.post('/login',expressAsyncHandler(async (req,res)=>{
    // get user credntials obj
    let userCredentialsObj = req.body;
    // find user by username
    let user = await userCollection.findOne({username:userCredentialsObj.username})
    // if user is not there
    if(user===undefined){
        res.send({message:"Invalid username"})
    }
    // if user found
    else{
        // compare passwords
        let status = await bcryptjs.compare(userCredentialsObj.password,user.password)
        // if not equal
        if(status === false){
            res.send({message:"Invalid Password"})
        }
        // if status is true
        else{
            // sreate and send token
            let signedToken = await jwt.sign({username:user.username},process.env.SECRET,{expiresIn:"1h"})
            // send token as Res
            res.send({message:"Success", token:signedToken,user:user})
        }
    }
}))





// export
module.exports=userApiObj