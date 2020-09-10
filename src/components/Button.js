import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  outline: none;
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  padding: 5px;
  box-shadow: 0 0 0 2px gray;
  background-color: #fff;
  border-radius: 3px;
  font-size: 15px;
  margin: 2px;
  cursor: pointer;
  
  &:focus {
    //box-shadow: 0 0 0 2px grey,
    //            0 0 0 3px black;
    outline: 1px dotted black;
  }
  
  &:hover {
    box-shadow: 0 0 0 2px #000;
  }
  
  &:active {
    background-color: ${props => props.theme.accent};
  }
`

export default Button