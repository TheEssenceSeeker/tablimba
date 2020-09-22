import React from 'react'
import styled, {css} from 'styled-components'

const StyledBurger = styled.div`
  padding: 0;
  width: 1.6rem;
  height: 1.6rem;
  position: fixed;
  top: 0.8rem;
  left: 0.8rem;
  z-index: 20;
  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
  cursor:pointer;
    
  div {
    height: 0.2rem;
    width: 1.6rem;
    background-color: #333;
    border-radius: 10px;
    transform-origin: 1px;
    
    transition: all .3s linear;
    
    ${({ isToggled }) => css`
      &:nth-child(1) {
        transform: ${isToggled ? 'rotate(45deg)' : 'rotate(0deg)'};
      }
      
      &:nth-child(2) {
        transform: ${isToggled ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${isToggled ? 0 : 1};
      }

      &:nth-child(3) {
        transform: ${isToggled ? 'rotate(-45deg)' : 'rotate(0deg)'};
      }
    `};
  }
  
  @media (min-width: 1300px) {
    display: none;
  }
`

const Burger = ({isToggled, onClick}) => {
  return (
    <StyledBurger
      isToggled={isToggled}
      onClick={onClick}
    >
      <div/>
      <div/>
      <div/>
    </StyledBurger>
  )
}

export default Burger
