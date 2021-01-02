import React from 'react';
import { Nav } from './Styles';
import { signIn, signUp } from '../../actions';
import { connect } from 'react-redux';


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
          <div className="auth-btns ">
            <button onClick={handleSignUp} className="btn sign-up">Sign Up</button>
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

export default connect(mapStateToProps, {signUp, signIn})(NavBar);