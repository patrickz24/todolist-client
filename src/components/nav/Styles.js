import styled from 'styled-components';

export const Nav = styled.nav`
  display: inline-block;
  width: 100%;
  height: 60px;
  color: #fff;
  background-color: black;
  .logo {
    font-family: Lora;
  
    font-weight: bold;
    line-height: 55px;
    font-size: xx-large;
    a {
      text-decoration: none;
      color: #ffffff;
    }
  }
  .auth-btns {
      margin-top: -3%;
    width: 100%;
    .btn {
      float: right;
      color: #fff;
      font-weight: 600;
    }
    .sign-in,
    .sign-up {
      height: 4vh;
      width: 8%;
      background: rgba(0, 0, 0, 0.1);
      border: 1px solid #ffffff;
      border-radius: 5px;
      padding: 3px;
      margin-top: 15px;
    }
  }
`;