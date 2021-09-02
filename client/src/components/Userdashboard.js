import Product from './Viewproduct'
import Cart from './Viewcart'
import { BrowserRouter, Link, NavLink, Switch, Route, useParams, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import getAxiosWithTokenObj from '../AuthorizationReq/AxiosReqWithToken'
import { useEffect, useState } from 'react';





function Userdashboard() {
  let {username} =useParams()
  let {path, url}=useRouteMatch()
  let {userObj}=useSelector(state=>state.user)
  let countFromStore = useSelector(state=>state.product.count)
  let axiosRequestWithToken= getAxiosWithTokenObj();
  // Link Styles
  let linkStyles={
    color:"white",
    fontWeight:"bold",
    backgroundColor:"#913CC1"
  }
  let [count,setCount]= useState(0)
  useEffect(async()=>{
        let response = await axiosRequestWithToken.get("/cart/getproduct")
        let data = response.data
        if(data.message ==='success'){
          setCount(data.payload.length)
        }
        else{
            alert(data.message)
        }
},[countFromStore])



  return (
    <div>
     <div className="d-flex justify-content-between">
      <img src={userObj.profileimage} width="100px" className=" border rounded-circle" alt="" />
      <h3 className="text-end heading me-2">Welcome{" "}<span className="text-primary">{username}</span></h3>
     </div>
      <BrowserRouter>
      <ul className="nav nav-pills d-flex justify-content-around">
        <li className="nav-item mx-2">
          <NavLink className="nav-link active" activeStyle={linkStyles} to={`${url}/viewproduct`}>View Products</NavLink>
        </li>
        <li className="nav-item mx-2">
          <NavLink className="nav-link active" activeStyle={linkStyles} to={`${url}/viewcart`}>View Cart
          <span className="badge badge-light">{count}</span>
          </NavLink>
        </li>
      </ul>


      <Switch>
        <Route path={`${path}/viewproduct`}>
          <Product/>
        </Route>
        <Route path={`${path}/viewcart`}>
          <Cart/>
        </Route>
      </Switch>
        </BrowserRouter>
    </div>
  );
}

export default Userdashboard;
