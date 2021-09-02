// create a route obj
const express = require("express")
const productApiObj = express.Router()
const expressAsyncHandler=require("express-async-handler")
const multerObj = require("./middleware/addImage")
const checkToken = require("./middleware/verifyToken")


// add body-parser middleware
productApiObj.use(express.json())


// get productCollection
let productCollection;
productApiObj.use((req,res,next)=>{
    productCollection = req.app.get("productCollection")
    next();
})


// add product
productApiObj.post("/addproduct",multerObj.single('photo'), expressAsyncHandler(async(req,res)=>{

    // get productObj
    const productObj = JSON.parse(req.body.productObj);
    // console.log(productObj);
    // add image url to productObj
    productObj.productimage=req.file.path;
    let pro = await productCollection.findOne({productid:productObj.productid})

    // if product id already existed send res as product is already existed
    if(pro === undefined){
        await productCollection.insertOne(productObj);
        res.send({message:"New Product Created"});
    }
    else{
        res.send({message:"Product ID already existed"})
    }
    // alert(res.data.message)

}))


productApiObj.get("/getproduct",checkToken,expressAsyncHandler(async (req,res)=>{
    let product = await productCollection.find().toArray();
    // console.log(product);
    res.send({message:"success",payload:product})

}))















module.exports = productApiObj;