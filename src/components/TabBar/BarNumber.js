import styled from 'styled-components'
import TabBarContainer from "./TabBarContainer"

const BarNumber = styled.div`
  position: absolute;
  left: -25px;
  top: -7px;
  font-size: 12px;
  width: 15px;
  text-align: center;
  z-index: 1;
  
  ${TabBarContainer}:last-child & {
    top: 0;
  }
  
  @media (max-width: 850px) {
    left: 3px;
  }
`

export default BarNumber