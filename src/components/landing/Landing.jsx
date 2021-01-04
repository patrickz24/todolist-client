import React from 'react';
import { Main } from './Styles';
import NavBar from '../layouts/NavBar';
import { NavLink } from 'react-router-dom';

const Landing = () => {

  return (
  <>
  <NavBar/>
    <Main>
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-12">
          <NavLink to="/signup">
            <button className="btn">Get Started</button>
           </NavLink>
          </div>
        </div>
      </div>
    </Main>
  </>
  )
}

export default Landing;