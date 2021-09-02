import logo from './logo.svg';
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import {BrowserRouter, NavLink, Route, Switch, } from 'react-router-dom'
import Userdashboard from './components/Userdashboard';
import {useDispatch, useSelector} from 'react-redux'
import { clearLoginStatus } from './redux-store/userSlice';
import Viewproduct from './components/Viewproduct';
import Viewcart from './components/Viewcart';
import Admindashboard from './components/Admindashboard';




function App() {
  let {isSuccess} =useSelector(state=>state.user)
  let dispatch = useDispatch();
  let activeLinkStyle={
    color:"#F92041",
    fontWeight:"bold"
  }

  const onUserLogout=()=>{
    // remove token frm Local Storage
    localStorage.clear()
    dispatch(clearLoginStatus())

  }

  return (
    <BrowserRouter>
    {/* nav bar */}
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand heading" href="#">My Site</a>
        {/* collapse button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* nav bar */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
            {!isSuccess?
            <>
            <li className="nav-item">
              <NavLink className="nav-link navbarText" activeStyle={activeLinkStyle} to="/home">Home <i class="fas fa-home"></i></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link navbarText" activeStyle={activeLinkStyle} to="/register">Register <i class="fas fa-user-plus"></i> </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link navbarText" activeStyle={activeLinkStyle} to="/login">Login <i class="fas fa-sign-in-alt"></i></NavLink>
            </li>
            </>:
            <>
            {/* <li className="nav-item">
              <NavLink className="nav-link navbarText" activeStyle={activeLinkStyle} to="/viewproduct">ViewProduct <i class="fas fa-sign-in-alt"></i></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link navbarText" activeStyle={activeLinkStyle} to="/viewcart">ViewCart <i class="fas fa-sign-in-alt"></i></NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link navbarText" activeStyle={activeLinkStyle} to="/login" onClick={onUserLogout}>Logout <i class="fas fa-sign-in-alt"></i></NavLink>
            </li>
            </>
            }
          </ul>
        </div>
      </div>
    </nav>  


    {/* define routers */}
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route  path="/home">
        <Home/>
      </Route>
      <Route path="/register">
        <Register/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/userdashboard/:username">
        <Userdashboard/>
      </Route>
      <Route path="/admindashboard/:username">
        <Admindashboard/>
      </Route>
      <Route path="/viewproduct">
        <Viewproduct/>
      </Route>
      <Route path="/viewcart">
        <Viewcart/>
      </Route>
    </Switch>



    </BrowserRouter>
    
  );
}

export default App;
