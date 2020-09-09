import styled from 'styled-components'

export const RadioCheckboxContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  
  &:last-child {
    margin-right: 0;
  }
  
  input {
    position: absolute;
    appearance: none;
    
    &:checked + div {
      background-color: deepskyblue;
      box-shadow: 0 0 0 2px #000;
    }
    
    & + div:hover {
      box-shadow: 0 0 0 2px #000;
    }
  }
  
  div {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 25px;
    width: 25px;
    background-color: white;
    font-size: 20px;
    user-select: none;
    box-shadow: 0 0 0 2px gray;
    cursor: pointer;
  }
`

