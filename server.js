// create express app
const express = require("express")
const app = express();

// configure dotenv
// the config() provides all env variables in process.emv
require("dotenv").config();

const jwt = require("jsonwebtoken")

// import path module
const path = require('path');


// connect build of react app with express
app.use(express.static(path.join(__dirname,'./client/build')))

// import APIS Object
const userApiObj = require("./APIS/userApi");
const adminApiObj = require("./APIS/adminApi");
const productApiObj = require("./APIS/productApi");
const cartApiObj = require("./APIS/cartApi");

// use userApiObj when path starts with /user
app.use("/users",userApiObj)
app.use("/admin",adminApiObj)
app.use("/product",productApiObj)
app.use("/cart",cartApiObj)


// Special Route:
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./client/build','index.html'))
})



// import mongodb module
const mongoClient = require("mongodb").MongoClient;


// get database url
const DATABASE_URL=process.env.DATABASE_URL;

// connect
mongoClient.connect(DATABASE_URL,(err,client)=>{
    if(err){
        console.log("err in db connect",err);
    }
    else{
        // get obj of database
        let databaseObject = client.db("project1")
        // get obj of collection
        let userCollection = databaseObject.collection("usercollection")
        let adminCollection = databaseObject.collection("admincollection")
        let cartCollection = databaseObject.collection("cartcollection")
        let productCollection = databaseObject.collection("productcollection")


        // set to app project
        app.set("userCollection",userCollection)
        app.set("adminCollection",adminCollection)
        app.set("cartCollection",cartCollection)
        app.set("productCollection",productCollection)

        console.log("DB Connection Success");
    }
})



// error handling middleware
app.use((err,req,res,next)=>{
    // console.log(err);
    res.send({message:"Error Occured",reason:err.message})
})



//assign port number
const PORT = process.env.PORT;
app.listen(PORT,()=>console.log(`Server listening on ${PORT}`))
