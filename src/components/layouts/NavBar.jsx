import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from './Styles';
import { signIn, signUp } from '../../actions';



const NavBar = (props) => {

  const handleSignUp = async () => {
await props.signUp({
  first_name: 'patrick',
  last_name:'zamble-bi',
  email: 'patrick.zamblebi37@gmail.com',
  password: 'patrick1'
});
  }

  const handleSignIn = async () => {
    await props.signIn({
      email: 'patrick.zamblebi37@gmail.com',
      password: 'patrick1'
    });
      }
  return (
    <Nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <div className="logo"><a href="/">To Do List</a></div>
          </div>
          <div className="auth-btns col-md-7">
     <NavLink to="/signup">
     <button  className="btn sign-up">Sign Up</button>
     </NavLink>
            <button onClick={handleSignIn} className="btn sign-in">Sign In</button>
          </div>
        </div>
      </div>
    </Nav>
  )
};

const mapStateToProps = ({ auth}) => {
  console.log(auth);
  return  {...auth}
}

export default NavBar;