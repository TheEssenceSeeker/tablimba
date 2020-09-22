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
  height: 11.5rem;
`

export default Header