import styled from 'styled-components'

const Header = styled.div`
  position: fixed;
  width: 100%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: ${p => p.theme.darkbg};
  height: calc(8rem + 48px);
  
  //box-shadow: 0px 2px 21px 0px rgba(0,0,0,0.75);
`

export default Header