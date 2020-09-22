import styled from 'styled-components'
import HamburgerContainer from "./HamburgerContainer";

const SideMenuContainer = styled.div`
  flex-direction: column;
  left: 0;
  top: 0;
  
  background: ${p => p.theme.white};
  position: fixed;
  width: 300px;
  z-index: 11;
  border-right: 1px solid #000;
  padding: 0 25px;
  height: 100vh;
  
  transition: transform .3s ease-in-out;
 
  @media (max-width: 1475px) {
    transform: ${p => p.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    
    ${HamburgerContainer} {
      //display: block;
    }
  }
  
  @media (max-width: 768px) {
      width: 100%;
  }
`

export default SideMenuContainer