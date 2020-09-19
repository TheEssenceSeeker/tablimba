import styled from 'styled-components'

const Select = styled.select`
  outline: none;
  border: none;
  height: 2rem;
  padding: 1px;
  box-shadow: 0 0 0 2px ${props => props.theme.grey};
  background-color: ${props => props.theme.white};
  border-radius: ${props => props.theme.bdradius};
  margin: 2px;
  user-select: none;
  
  &:not(:disabled) {
      cursor: pointer;
      
      &:active {
        background-color: ${props => props.theme.accent};
      }   
      
      &:hover {
        box-shadow: 0 0 0 2px ${props => props.theme.black};
      }
      
      &:focus {
        border: 1px dotted ${props => props.theme.black};
        box-shadow: 0 0 0 2px ${props => props.theme.black};
        padding: 0;
      }
  }
`

export default Select