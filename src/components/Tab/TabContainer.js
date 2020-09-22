import styled from "styled-components"
import DynamicTablimbaContainer from "../Lib/DynamicTablimbaContainer"
import {FOOTER_HEIGHT, HEADER_HEIGHT} from "../styled/global"

const TabContainer = styled(DynamicTablimbaContainer)`
  margin-top: ${HEADER_HEIGHT};
  margin-bottom: ${FOOTER_HEIGHT}; 
  display: flex;
  flex-direction: column-reverse;
`

export default TabContainer