import styled from 'styled-components';

export const Nav = styled.nav`
  display: inline-block;
  width: 100%;
  height: 60px;
  color: #fff;
  background-color: black;
  .logo {
    font-family: Lora, sans-serif;
    font-weight: bold;
    line-height: 55px;
    font-size: xx-large;
    a {
      text-decoration: none;
      color: #ffffff;
    }
  }
  .auth-btns {
    width: 100%;
    .btn {
      float: right;
      color: #fff;
      font-weight: 600;
    }
    .sign-in {
      line-height: 45px;
    }
    .sign-up {
      height: 30px;
      width: fit-content;
      background: rgba(0, 0, 0, 0.9);
      border: 1px solid #fff;
      border-radius: 5px;
      padding: 3px 10px;
      margin-top: 15px;
    }
  }
`;