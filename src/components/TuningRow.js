import styled from "styled-components"
import {RadioCheckboxContainer} from "./styled"

const TuningRow = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  position: relative;
  ${RadioCheckboxContainer} input:checked + div {
    background-color:transparent;
  }
  ${RadioCheckboxContainer} div {
    position:absolute;
    right: -25px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    box-shadow: none;
    background-color: transparent;
    border-radius: 50%;
    
    &:hover {
      box-shadow: 0 0 0 2px ${props => props.theme.grey};
    }
  }
`

export default TuningRow