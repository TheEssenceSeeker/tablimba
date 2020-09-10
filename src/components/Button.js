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
  box-shadow: 0 0 0 2px ${props => props.theme.grey};
  background-color: ${props => props.theme.white};
  border-radius: ${props => props.theme.bdradius};
  font-size: 15px;
  margin: 2px;
  cursor: pointer;
  
  &:focus,
  &:active {
    background-color: ${props => props.theme.accent};
  }
  
  &:hover {
    box-shadow: 0 0 0 2px ${props => props.theme.black};
  }
`

export default Button