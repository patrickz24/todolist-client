import React, { useState, useContext } from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import Layout from '../layouts/Layout';
import { AuthFormWrapper } from './Styles';
import { Context } from '../../context/authContext';

const SignUp = ({ signUp }) => {
  const { state } = useContext(Context);
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
   const [first_nameErr, setFirst_nameErr] = useState('');
   const [last_nameErr, setLast_nameErr] = useState('');
  const [emailErr, setemailErr] = useState('');
  const [passwordErr, setpasswordErr] = useState('');
 

  const handleChange = (e, name) => {
    const user = {};
    const emailRegEx = RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    user[name] = e.target.value;
    // validations
    switch (name) {
      case 'first_name':
        setFirst_name(user.first_name);
        user.first_name.length < 3 ? setFirst_nameErr('Name must be at least 3 characters!') : setFirst_nameErr('');
        break;
        case 'last_name':
            setLast_name(user.last_name);
            user.last_name.length < 3 ? setLast_nameErr('Name must be at least 3 characters!') : setLast_nameErr('');
            break;
      case 'email':
        setemail(user.email);
        !emailRegEx.test(user.email) ? setemailErr('Invalid Email!') : setemailErr('');
        break;
      case 'password':
        setpassword(user.password);
        user.password.length < 8 ? setpasswordErr('Password must be at least 8 characters!') : setpasswordErr('');
        break;
        default:
        break;
    }
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (first_name && last_name && email && password &&  !first_nameErr && !last_nameErr && !emailErr && !passwordErr) {
      await signUp({ first_name, last_name, email, password });
    }
  }

  return (
    <Layout>
      <AuthFormWrapper>
        <h2 className="text-center">Inscription</h2>
        {state.signUpErr && <div className="alert alert-danger text-center">
          <span className="text-danger text-capitalize">{state.signUpErr.description}</span>
          </div>}
        <form className="mt-4" onSubmit={handleSignUp}>
          <div className="form-group">
            <label htmlFor="first_name">Prénom</label>
            <input
              type="text"
              name="first_name"
              className={classnames(
                "form-control",
                { 'is-invalid': first_nameErr, 'is-valid': !first_nameErr && first_name.length }
              )}
              id="first_name"
              placeholder="Prénom"
              onChange={(e) => handleChange(e, 'first_name')}
            />
            {first_nameErr && <small className="text-danger">{first_nameErr}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="last_name">Nom</label>
            <input
              type="text"
              name="last_name"
              className={classnames(
                "form-control",
                { 'is-invalid': last_nameErr, 'is-valid': !last_nameErr && last_name.length }
              )}
              id="last_name"
              placeholder="Nom"
              onChange={(e) => handleChange(e, 'last_name')}
            />
            {last_nameErr && <small className="text-danger">{last_nameErr}</small>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className={classnames(
                "form-control",
                { 'is-invalid': emailErr, 'is-valid': !emailErr && email.length }
              )}
              id="email"
              placeholder="Email"
              onChange={(e) => handleChange(e, 'email')}
            />
            {emailErr && <small className="text-danger">{emailErr}</small>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              name="password"
              className={classnames(
                "form-control",
                { 'is-invalid': passwordErr, 'is-valid': !passwordErr && password.length }
              )}
              id="password"
              placeholder="Mot de passe"
              onChange={(e) => handleChange(e, 'password')}
            />
            {passwordErr && <small className="text-danger">{passwordErr}</small>}
          </div>
          
          <input type="submit" className="btn btn-primary" value="S'inscrire"/>
        </form>
        <p className="float-left">
          Vous souhaitez vous connecter? <NavLink to="signin">Connexion</NavLink>
        </p>
      </AuthFormWrapper>
    </Layout>
  )
}

export default SignUp