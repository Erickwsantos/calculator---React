import styled from "styled-components";

export const InputContainer = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
  padding: 10px;

  input {
    border-radius: 10px;
    padding: 0 10px;
    width: 100%;
    height: 55px;
    background-color: #000000;
    border: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 24px;
    font-family: "Roboto", sans-serif;
    float: right;
    clear: both;
    color: white;
  }
`;
