import React from 'react'
import {BrowserRouter, Link, NavLink, Switch, Route, useParams, useRouteMatch} from 'react-router-dom'
import Addproduct from './Addproduct'
import Viewproduct from './Viewproduct'



function Admindashboard() {
    let {username} = useParams()
    let {path, url} = useRouteMatch()
    // Link Styles
    let linkstyles={
        color:"white",
        fontWeight:"bold",
        backgroundColor:"#913CC1"
    }
    return (
        <div>
            <h3 className="text-end heading position-relative me-5">Welcome{" "}
            <span className="text-primary mb-0">{`${username} `}</span><span className="text-warning fw-bold fs-6"><br />(Admin)</span></h3>

            <BrowserRouter>
            <ul className="nav nav-pills d-flex justify-content-around">
                <li className="nav-item mx-2">
                    <NavLink className="nav-link active" activeStyle={linkstyles} to={`${url}/addproduct`}>Add Product</NavLink>
                </li>
                <li className="nav-item mx-2">
                    <NavLink className="nav-link active" activeStyle={linkstyles} to={`${url}/viewproduct`}>View Product</NavLink>
                </li>
            </ul>


            <Switch>
                <Route path={`${path}/addproduct`}>
                    <Addproduct/>
                </Route>
                <Route path={`${path}/viewproduct`}>
                    <Viewproduct/>
                </Route>
            </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Admindashboard
