import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  width: 100%;
`

const Ul = styled.ul`
  display: inline-flex;
  flex-direction: column;
  list-style: none;
  padding: 20px 0;
  
  li {
    display:block;
    font-size: 2rem;
    margin-bottom: 1rem;
    height: 3rem;
    overflow: hidden;
    line-height: 3rem;
    width: 100%;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <Ul>
        <li>Soon...</li>
        <li>Menu item #1</li>
        <li>Menu item #2</li>
        <li>Menu item #3</li>
      </Ul>
    </Nav>
  )
}

export default Navbar
