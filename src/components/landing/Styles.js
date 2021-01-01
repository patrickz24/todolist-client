import styled from 'styled-components';

export const Main = styled.div`
  background-image: url('/todo.jpg');
  filter: saturate(200%);
  background-image:
  linear-gradient(rgba(1, 1, 1, 0.52), rgba(8,8,8, 0.73)),
  url('/todo.jpg');
  width: 100%;
  height: 93.5vh;
  background-size: cover/center;
  .container-fluid {
    height: 100%;
  }
  .row {   height: 100%;
      display:flex;
      justify-content:center;
    
 align-items:center;
    .btn {
        height:5vh;
        width:200%;
     
      border: 2px solid #ffffff;
      background: black;
      font-size: x-large;
      border-radius: 5px;
      color: #ffffff;
      font-weight: 600;
    }
  }
`;