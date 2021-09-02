import React, { useEffect, useState } from 'react'
import {useForm} from 'react-hook-form'
import {useSelector,useDispatch} from 'react-redux'
import {clearLoginStatus, userLogin} from '../redux-store/userSlice'
import {useHistory} from 'react-router-dom'



function Login() {

    let{register,handleSubmit, formState:{errors} } = useForm()
    let{userObj,isSuccess,isLoading,isError,invalidLoginMessage}=useSelector((state)=>state.user)
    let dispatch =useDispatch(clearLoginStatus)
    let history = useHistory()
    let [userCredentialsObj,setUserCredentialsObj]=useState(
        {
            type:"",
            username:"",
            password:""
        }
    )



    function onLoginFormSubmit(userObj){
        // console.log(userCredentialsObj);
        setUserCredentialsObj({...userObj})
        dispatch(userLogin(userObj))
    }

    useEffect(()=>{
        if(isSuccess && userCredentialsObj.type === 'user'){
        //navigate  to userdashboard
            history.push(`/userdashboard/${userCredentialsObj.username}`)
        }
        if(isSuccess && userCredentialsObj.type === 'admin'){
        //navigate  to userdashboard
            history.push(`/admindashboard/${userCredentialsObj.username}`)
        }
    },[isSuccess])

    return(
        <div className="row mt-5">
            <h2 className="text-center heading">Sign In</h2>

            {invalidLoginMessage && <h3 className="text-center text-danger">{invalidLoginMessage}</h3>}
            <form className="col-11 col-sm-8 col-md-6 col-lg-4 mx-auto shadow mb-3" onSubmit={handleSubmit(onLoginFormSubmit)}>
                {/* radio button part */}
                <div className="justify-content-evenly mb-4">
                    <input type="radio" name="userType" id="admin"  value="admin" {...register("type")} />
                    <label htmlFor="admin">Admin</label>
                    <input type="radio" name="userType" id="user" className="ms-5" value="user" {...register("type")} />
                    <label htmlFor="user">User</label>
                </div>
                {errors.type?.type==='required' && <p className="alert alert-danger">*Have To Selcet One</p>}
                {/* username */}
                <div className="form-floating mb-2">
                        <input type="text" name="username" id="username" className="form-control" placeholder="UserName" 
                        {...register("username",{required:true})}/>
                        <label htmlFor="username"> Username*</label>
                </div>
                {errors.username?.type==='required' && <p className="alert alert-danger">*Usernme is required</p>}



                {/* password */}
                <div className="form-floating mb-2">
                        <input type="password" name="password" id="password" className="form-control" placeholder="UserName" 
                        {...register("password",{required:true,minLength:6})}/>
                        <label htmlFor="password"> Password*</label>
                </div>
                {errors.password?.type==='required' && <p className="alert alert-danger">*Password is required</p>}
                
                
                {/* submit */}
                <button className="btn btn-success w-50 d-block mx-auto mb-3">Log In</button>
            </form>
        </div>
    )
}

export default Login
