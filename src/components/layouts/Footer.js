import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
width: 100%;
border-top: 1px solid #ccc;
background-color: #fff;
position: absolute;

 `;

const Footer = () => {
    return (
        <Wrapper>
            <p className="text-center mt-3">&copy; 2021 Patrick Zamble-bi</p>
        </Wrapper>
    )
}

export default Footer
