import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";

const Nav = styled.nav`
  width: 100%;
  margin-top: 15px;
`

const Ul = styled.ul`
  display: inline-flex;
  flex-direction: column;
  list-style: none;
  padding: 20px 0;
  
  li {
    display:block;
    margin-bottom: 1rem;
    height: 3rem;
    overflow: hidden;
    line-height: 3rem;
    width: 100%;
  }
`

const StyledLink = styled(Link)`
  font-size: 2rem;
  color: #4393e6;
`

const linkData = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/contacts', name: 'Contacts' },
]

const Navbar = ({onClickLink}) => {

  const links = linkData.map((link, i) => (
    <StyledLink
      key={i}
      onClick={onClickLink}
      to={link.path}
    >
      {link.name}
    </StyledLink>
  ))

  return (
    <Nav>
      <Ul>
        {links}
      </Ul>
    </Nav>
  )
}

export default Navbar
