import React, {  useContext, useEffect} from 'react';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { NavLink } from 'react-router-dom';
import { Nav } from './Styles';
import {Context as AuthContext } from '../../context/authContext';




const NavBar = () => {
const {state: { user }, setCurrentUser}= useContext(AuthContext);

useEffect(() => {
  
  if (Cookies.get('token')){
  setCurrentUser(Cookies, jwtDecode)
}
}, []);
    
  return (
    <Nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <div className="logo"><a href="/">To Do List</a></div>
          </div>
          <div className="auth-btns col-md-7">
{user ? (
    <div className="float-right mt-3">{user.first_name}   {user.last_name}</div>
  ) :  (
    <>     
    <NavLink to="/signup">
    <button  className="btn sign-up">Inscription</button>
    </NavLink>
    <NavLink to="/signin">
    <button className="btn sign-in" >Connexion</button>
    </NavLink>
    </>
  )
}
<NavLink to="/signup">
    <button  className="btn sign-up">Inscription</button>
    </NavLink>
    <NavLink to="/signin">
    <button className="btn sign-in" >Connexion</button>
    </NavLink>
            
          </div>
        </div>
      </div>
    </Nav>
  )
};



export default NavBar;