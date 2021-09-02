import react, { useState } from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useHistory } from 'react-router-dom';



function Addproduct(){
    // let history = useHistory()
    let{register,handleSubmit, formState:{errors} } = useForm()
    let[file, setFile]=useState(null);
    let history=useHistory();
    

    //File Adding     
    const onFileSelect=(e)=>{
        // console.log(e.target.files[0]);
        setFile(e.target.files[0])
    }

    // when Form Submitted
    const addProductForm= async (productObj)=>{
        // create Formdata Object
        let formData = new FormData();
        // Append image to it
        formData.append('photo',file,file.name)
        // Append product object
        formData.append('productObj',JSON.stringify(productObj))
        // HTTP Post
        let response = await axios.post("/product/addproduct",formData)
        alert(response.data.message);
        history.goBack()
    }
    
  


    return(
        <div className="row mt-5">
            {/* <p className="display-4  text-center text-danger">{userRegisterStatus}</p> */}
            <form className="col-11 col-sm-8 col-md-6 mx-auto shadow" onSubmit={handleSubmit(addProductForm)}>
                {/* product id */}
                <div className="form-floating mb-2">
                        <input type="number" name="productid" id="productid" className="form-control" placeholder="productid" 
                        {...register("productid",{required:true})}/>
                        <label htmlFor="productid"> Product Id*</label>
                </div>
                {errors.productid?.type==='required' && <p className="alert alert-danger">*Product Id is required</p>}

                {/* product name */}
                <div className="form-floating mb-2">
                        <input type="text" name="productname" id="productname" className="form-control" placeholder="productname" 
                        {...register("productname",{required:true})}/>
                        <label htmlFor="productname">Product Name*</label>
                </div>
                {errors.productname?.type==='required' && <p className="alert alert-danger">*Product name is required</p>}
                
                {/* Price */}
                <div className="form-floating mb-2">
                        <input type="number" name="price" id="price" className="form-control" placeholder="price" 
                        {...register("price",{required:true})}/>
                        <label htmlFor="price"> Product Price*</label>
                </div>
                {errors.price?.type==='required' && <p className="alert alert-danger">*Price is required</p>}

                {/* Description */}
                <div className="form-floating mb-2">
                        <input type="text" name="description" id="description" className="form-control" placeholder="description" 
                        {...register("description",{required:true})}/>
                        <label htmlFor="description">Product Description*</label>
                </div>
                {errors.description?.type==='required' && <p className="alert alert-danger">*Description is required</p>}


                {/* Product Image*/}
                <div className="form-floating mb-4">
                        <input type="file" name="productimage" id="productimage" className="form-control" placeholder="productimage"  onChange={onFileSelect}/>
                         {/* {...register("productimage",{required:true,})} */}
                        {/* <label htmlFor="productimage">Product Image*</label> */}
                </div>
                {/* {errors.productimage?.type==='required' && <p className="alert alert-danger">*Image is required</p>} */}



                {/* Add product */}
                <button className="btn btn-success w-50 d-block mx-auto mb-3">Add Product</button>
            </form>
        </div>
    )
}

export default Addproduct;






