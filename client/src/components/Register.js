import react, { useState } from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function Register(){
    let history = useHistory()
    let{register,handleSubmit, formState:{errors} } = useForm()
    let[userRegisterStatus, setUserRegisterStatus]=useState("");
    let[file, setFile]=useState(null);


    // full form submitted
    const onRegisterFormSubmit=async (userObj)=>{
        // console.log(userObj);
        // create Formdata Object
        let formData = new FormData();
        // Append image to it
        formData.append('photo',file,file.name)
        // Append product object
        formData.append('userObj',JSON.stringify(userObj))

       let responseObj=await axios.post("/users/register",formData)
       let payload = responseObj.data;
        if(payload.message==='Success'){
            // redirect to login
            history.push("/login")
        }
        else{
            setUserRegisterStatus("username had already Taken")
        }
        // console.log("payload is",payload);
    }

    // for dp select
     const onProfileSelect=(e)=>{
        // console.log(e.target.files[0]);
        setFile(e.target.files[0])
    }


    return(
        <div className="row mt-5">
            <p className="display-4  text-center text-danger">{userRegisterStatus}</p>
            <form className="col-11 col-sm-8 col-md-6 mx-auto shadow mb-3" onSubmit={handleSubmit(onRegisterFormSubmit)}>
                {/* name */}
                <div className="form-floating mb-2">
                        <input type="text" name="name" id="name" className="form-control" placeholder="UserName" 
                        {...register("name",{required:true})}/>
                        <label htmlFor="name"> Name*</label>
                </div>
                {errors.name?.type==='required' && <p className="alert alert-danger">*Name is required</p>}
                {/* username */}
                <div className="form-floating mb-2">
                        <input type="text" name="username" id="username" className="form-control" placeholder="UserName" 
                        {...register("username",{required:true,minLength:6})}/>
                        <label htmlFor="username"> Username*</label>
                </div>
                {errors.username?.type==='required' && <p className="alert alert-danger">*Usernme is required</p>}
                {errors.username?.type==='minLength' && <p className="alert alert-danger">*Username must have more than 6 characters</p>}
                {/* password */}
                <div className="form-floating mb-2">
                        <input type="password" name="password" id="password" className="form-control" placeholder="UserName" 
                        {...register("password",{required:true,minLength:6})}/>
                        <label htmlFor="password"> Password*</label>
                </div>
                {errors.password?.type==='required' && <p className="alert alert-danger">*Password is required</p>}
                {/* email */}
                <div className="form-floating mb-2">
                        <input type="email" name="email" id="email" className="form-control" placeholder="UserName" 
                        {...register("email",{required:true,})}/>
                        <label htmlFor="email"> Email*</label>
                </div>
                {errors.email?.type==='required' && <p className="alert alert-danger">*Email is required</p>}
                {/* date of birth */}
                <div className="form-floating mb-4">
                        <input type="date" name="dob" id="dob" className="form-control" placeholder="UserName" 
                        {...register("dob",{required:true,})}/>
                        <label htmlFor="dob"> DOB*</label>
                </div>
                {errors.dob?.type==='required' && <p className="alert alert-danger">*DOB is required</p>}

                {/* Product Image*/}
                <div className="form-floating mb-4">
                        <input type="file" name="profileimage" id="profileimage" className="form-control" placeholder="profileimage"  onChange={onProfileSelect}/>
                        {/* <label htmlFor="profileimage">Profile Image*</label> */}
                </div>

                {/* submit */}
                <button className="btn btn-success w-50 d-block mx-auto">Signup</button>
            </form>
        </div>
    )
}

export default Register;






