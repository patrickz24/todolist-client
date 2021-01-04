import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import NavBar from './NavBar';

const Wrapper = styled.div`
width: 100%;
min-height: 100vh;
position: relative;
 `;

const Layout = ({ children }) => {
    return (
        <Wrapper>
            <NavBar/>
            {children}
            <Footer/>
        </Wrapper>
    )
}

export default Layout
