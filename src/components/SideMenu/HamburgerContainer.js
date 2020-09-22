import styled from 'styled-components'

const HamburgerContainer = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;

  @media (min-width: 1475px) {
    display: none;
  }

`

export default HamburgerContainer