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

const Navbar = () => {
  return (
    <Nav>
      <Ul>
        <li>
          <StyledLink to='/'>Home</StyledLink>
        </li>
        <li>
          <StyledLink to='/about'>About</StyledLink>
        </li>
        <li>
          <StyledLink to='/contacts'>Contacts</StyledLink>
        </li>
        {/*<li>*/}
        {/*  <Link to='/donate'>Donate</Link>*/}
        {/*</li>*/}
      </Ul>
    </Nav>
  )
}

export default Navbar
