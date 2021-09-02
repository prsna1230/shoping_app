// create a route
const express = require("express")
const adminApiObj = express.Router()
const jwt = require("jsonwebtoken")
const expressAsyncHandler=require("express-async-handler")


// add body parser
adminApiObj.use(express.json())

// get adminCollection
let adminCollection;
adminApiObj.use((req,res,next)=>{
    adminCollection = req.app.get("adminCollection")
    next();
})



// admin Login
adminApiObj.post('/login',expressAsyncHandler(async (req,res)=>{
    // get user credntials obj
    let adminCredentialsObj = req.body;
    // find user by username
    let user = await adminCollection.findOne({username:adminCredentialsObj.username})
    // if user is not there
    if(user===undefined){
        res.send({message:"Invalid username"})
    }
    // if user found
    else{
        // compare passwords
        // let status = await bcryptjs.compare(adminCredentialsObj.password,user.password)
        let status = (adminCredentialsObj.password === user.password)
        // if not equal
        if(status === false){
            res.send({message:"Invalid Password"})
        }
        // if status is true
        else{
            // sreate and send token
            let signedToken = await jwt.sign({username:user.username},process.env.SECRET, {expiresIn:'1h'})
            // send token as Res
            res.send({message:"Success", token:signedToken,user:user})
        }
    }
}))









module.exports = adminApiObj;