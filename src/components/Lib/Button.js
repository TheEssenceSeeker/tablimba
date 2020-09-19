import styled from 'styled-components'

const Button = styled.button`
  outline: none;
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  padding: 5px;
  box-shadow: 0 0 0 2px ${props => props.theme.grey};
  background-color: ${props => props.theme.white};
  border-radius: ${props => props.theme.bdradius};
  margin: 2px;
  user-select: none;
  min-width: 2rem;
  
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
        padding: 4px;
      }
  }
  
`

export default Button