import styled from 'styled-components'
import TabBarContainer from "./TabBarContainer"

const BarNumber = styled.div`
  position: absolute;
  left: -25px;
  top: -0.3rem;
  font-size: 0.9rem;
  width: 15px;
  text-align: center;
  z-index: 1;
  user-select: none;
  color ${p => p.theme.grey};
  
  ${TabBarContainer}:last-child & {
    top: 0;
  }
  
  @media (max-width: 850px) {
    left: 3px;
  }
`

export default BarNumber