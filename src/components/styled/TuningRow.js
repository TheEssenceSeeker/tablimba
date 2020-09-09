import styled from 'styled-components'

const TuningRow = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  position: relative;
  div:last-child {
    position:absolute;
    right: -12px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    //color: grey;
    box-shadow: none;
    background-color: transparent;
    border-radius: 50%;
    
    &:hover {
      background: transparent;
      box-shadow: none;
    }
    //& + input:checked {
    //  color:deepskyblue;
    //}
  }
`

export default TuningRow