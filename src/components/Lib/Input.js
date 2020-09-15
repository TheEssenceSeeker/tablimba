import styled from 'styled-components'

const Input = styled.input`
  outline: none;
  border: 0;
  
  //height: 25px;
  height: 2rem;
  padding: 5px;
  box-shadow: 0 0 0 2px ${props => props.theme.grey};
  background-color: #fff;
  border-radius: 3px;
  //font-size: 15px;
  margin: 2px;
  cursor: pointer;
  position: relative;
  width: ${props => props.width};
  
  &:focus {
    background-color: ${props => props.theme.accent};
    cursor:text;
    border: 1px dotted ${props => props.theme.black};
    padding: 4px;
  } 
  
  &:hover {
    box-shadow: 0 0 0 2px ${props => props.theme.black};
  }
`

export default Input