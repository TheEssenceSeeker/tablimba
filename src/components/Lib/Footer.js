import styled from 'styled-components'

const Footer = styled.div`
  position: fixed;
  width: 100%;
  z-index: 10;
  display: flex;
  bottom: 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${p => p.theme.darkbg};
  height: 3rem;
  
  //box-shadow: 0px 2px 21px 0px rgba(0,0,0,0.75);
`

export default Footer