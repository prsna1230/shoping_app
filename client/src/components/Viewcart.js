import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import getAxiosWithTokenObj from '../AuthorizationReq/AxiosReqWithToken'
import { addProduct, decrementCount } from '../redux-store/cartSlice';


function Viewcart() {
    // let indexFromStore = useSelector((state)=>state.product.index)
    // let jusproduct = useSelector((state)=>state.product.product)
    let [product,setProduct] = useState([]);
    // let productFromStore = [...jusproduct]
 
    let dispatch = useDispatch();
    let axiosRequestWithToken= getAxiosWithTokenObj();
    let[temp,setTemp]=useState(0);
   

    useEffect(async()=>{
        let response = await axiosRequestWithToken.get("/cart/getproduct")
        let data = response.data
        if(data.message ==='success'){
            // dispatch(addProduct([...data.payload]));
            // console.log("prasanna: ",jusproduct);
            setProduct([...data.payload])
        }
        else{
            alert(data.message)
        }
},[temp])

    const deleteProduct= async (id)=>{
        let response = await axios.delete(`/cart/deleteproduct/${id}`)
        setTemp(temp+1)
        dispatch(decrementCount())
    }
        

    return (
        <div>
            <table className="table table-bordered w-50 mx-auto">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Product Description</th>
                        <th>Option</th>
                    </tr>
                </thead>
                <tbody>

                    {
                    // indexFromStore.length !== 0?
                    product.map((value,ind)=>{
                        return(
                            <tr key={ind}>
                                <td>{value.productname}</td> 
                                 <td>{value.price}</td>
                                <td>{value.description}</td>
                                <td><button className="btn btn-danger"
                                onClick={()=>deleteProduct(value.productid)}>Delete</button></td>
                            </tr>
                        )
                    })
                    // <h1>No Product Selected..!!</h1>
                    }
                 </tbody>
             </table>
        </div>
    )
}

export default Viewcart
