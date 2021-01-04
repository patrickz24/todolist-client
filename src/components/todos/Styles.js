import styled from 'styled-components';
import { CheckDouble } from '@styled-icons/boxicons-regular/CheckDouble';

export const Tick = styled(CheckDouble)`
  width: 30px;
  color: #06A82A;
  margin-right: -10px;
`;

export const TodoList = styled.div`
  width: 100%;
  min-height: 90vh;
  margin-bottom: 100px;
  .header {
    color: black;
    font-weight: 400;
  }
  .todos {
    background: rgba(204, 204, 204, 0.1);
    border: 1px solid rgba(10, 248, 77, 0.5);
    padding: 10px;
  }
  .todo {
    border: 1px solid #ccc;
    margin: 10px;
    position: relative;
    padding: 0 20px 10px 20px;
    background-color: #fff;
    min-height: 100px;
    .float-right button {
      background-color: #fff;
      color: #06A82A;
      font-weight: 600;
      margin-right: -10px;
      border: none;
    }
    .float-right button:hover {
      font-weight: 600;
      color: #000;
    }
    h5 {
      font-weight: 600;
      padding: 10px 0;
    }
    .delete-btn {
      position: absolute;
      right: 0;
      width: 25px;
      background-color: white;
      border: 1px solid red;
    }
    .add-btn {
      position: absolute;
      right: 28px;
      background-color: #06A82A;
      border: 1px solid #06A82A;
      color: #fff;
      width: fit-content;
      padding: 5px 10px;

    }
    .create-todoitem {
      border: 1px solid #ccc;
      background-color: #fff;
      margin-top: 1px;
      border-radius: 3px;
      padding: 1px;
      input {
        width: 90%;
        border: none;
        padding: 5px;
        outline: none;
      }
      button {
        float: right;
        padding: 5px;
        height: 100%;
        width: fit-content;
        border: none;
        border-left: 1px solid #ccc;
      }
    }
  }
`;


export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .3);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  form {
    margin-top: -100px;
    background: #FAFAFA;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    width: 500px;
    padding: 30px;
    z-index: 20;
    box-shadow: 0 0 10px rgba(100, 1O0, 100, 0.9)
  }
`;
