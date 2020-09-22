import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  width: 100%;
`

const Ul = styled.ul`
  list-style: none;
  padding: 20px 0;
  
  li {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <Ul>
        <li>About</li>
        <li>Contacts</li>
        <li>Menu #3</li>
      </Ul>
    </Nav>
  )
}

export default Navbar
