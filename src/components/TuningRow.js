import styled from "styled-components"
import {RadioCheckboxContainer} from "./styled"
import Container from "./Container";

const TuningRow = styled(Container)`
  position: relative;
  
  ${RadioCheckboxContainer} {
    position:absolute;
     right: -35px;
     box-shadow: none;
     
     div {
      background-color: transparent;
      box-shadow: none;
      border-radius: 50%;
     }
  }
`

export default TuningRow