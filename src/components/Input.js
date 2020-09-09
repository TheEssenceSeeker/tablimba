import styled from "styled-components";

const Input = styled.input`
  outline: none;
  border: 0;
  
  //display: inline-flex;
  //justify-content: center;
  //align-items: center;
  height: 15px;
  padding: 5px;
  box-shadow: 0 0 0 2px gray;
  background-color: #fff;
  border-radius: 3px;
  font-size: 15px;
  margin: 2px;
  cursor: pointer;
  position: relative;
  
  &:focus {
    background-color: deepskyblue;
    cursor:text;
  } 
  
  &:hover {
    box-shadow: 0 0 0 2px #000;
  }
`

export default Input