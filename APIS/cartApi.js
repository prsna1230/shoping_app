const express = require("express")
const cartApiObj = express.Router()
const expressAsyncHandler=require("express-async-handler")
const checkToken = require("./middleware/verifyToken")


// add body parser middleware
cartApiObj.use(express.json())


// get cart Collection
let cartCollection;
cartApiObj.use((req,res,next)=>{
    cartCollection=req.app.get("cartCollection")
    next();
})



// add products to Cart
cartApiObj.post("/addcart",expressAsyncHandler(async(req,res)=>{
    const cartProductObj = req.body
    await cartCollection.insertOne(cartProductObj);
    res.send({message:"New Product Created"});
}) )



// get product
cartApiObj.get("/getproduct",checkToken,expressAsyncHandler(async (req,res)=>{
    let product = await cartCollection.find().toArray();
    res.send({message:"success",payload:product})

}))


// delete product
cartApiObj.delete("/deleteproduct/:id", expressAsyncHandler(async (req,res)=>{
    let id = req.params.id;
    await cartCollection.deleteOne({productid:id})
    res.send({message:"Product Deleted"})
}))


module.exports = cartApiObj;