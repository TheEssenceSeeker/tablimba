import styled from 'styled-components'
import {HEADER_HEIGHT} from "../styled/global"

const Header = styled.div`
  position: fixed;
  width: 100%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  //justify-content:space-between;
  align-items: center;
  background: ${p => p.theme.darkbg};
  height: ${HEADER_HEIGHT};
`

export default Header