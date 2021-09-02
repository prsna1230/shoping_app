import axios from 'axios';
import React from 'react'
import {useEffect, useState} from "react"
import getAxiosWithTokenObj from '../AuthorizationReq/AxiosReqWithToken'
import {useSelector,useDispatch } from 'react-redux'
import {clearLoginStatus} from '../redux-store/userSlice'
import {incrementCount} from '../redux-store/cartSlice'
import {useHistory} from 'react-router-dom'
import {history} from '../customHistory'




function Viewproduct() {
   
    
    let dispatch = useDispatch();
    // let history = useHistory();
    let axiosRequestWithToken= getAxiosWithTokenObj();
    let[product,setProduct] = useState([]);
    
    useEffect(async()=>{
        let response = await axiosRequestWithToken.get("/product/getproduct")
        let data = response.data
        if(data.message ==='success'){
            setProduct([...data.payload])
        }
        else{
            alert(data.message)
            // redirect to login
            localStorage.clear()
            // set isSuccess to false
            history.push("/login")
            dispatch(clearLoginStatus())
          
        }
    },[])

    const addCart=(id)=>{

        let result = product.find((pro)=>pro.productid === id)
        const sendToCart = async ()=>{
            let response = await axios.post("/cart/addcart", result)
        }
        sendToCart();
        dispatch(incrementCount())
    }


    
    
    return (
        <div className="row row-cols-sm-4 row-cols-md-4 row-cols-lg-8 container mx-auto">
            {
                product.map((productObj,index)=>{
                    return(
                        <div className="cols mt-2" key={index}>
                            <div className="card shadow">
                                <img src={productObj.productimage} alt="" width="100%" className="mx-auto"/>
                                <div className="card-body">
                                    <h3 className="text-center mt-0">{productObj.productname}</h3>
                                    <p className="text-primary mx-auto">{productObj.price}$</p>
                                    <h3 className="lead text-center fs-6 lead">{productObj.description}</h3>
                                    <button className="btn btn-success float-end" 
                                    onClick={()=>dispatch(addCart(index))} 
                                    onClick={()=>addCart(productObj.productid)}>
                                        Add Cart
                                    </button>
                                    {/* <button className="btn btn-success float-end" onClick={()=>addCart(productObj.productid)}>Add Cart</button> */}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Viewproduct
