import styled from 'styled-components'

export const RadioCheckboxContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  
  &:last-child {
    margin-right: 0;
  }
  
  input {
    position: absolute;
    appearance: none;
    
    &:checked + div {
      background-color: ${props => props.theme.accent};
      box-shadow: 0 0 0 2px ${props => props.theme.black};
    }
    
    & + div:hover {
      box-shadow: 0 0 0 2px ${props => props.theme.black};
    }
    
    &:focus + div {
      outline: 1px dotted black;
    }
  }
  
  div {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 2rem;
    //height: 25px;
    //width: 25px;
    background-color: ${props => props.theme.white};
    //font-size: 20px;
    font-size: 1.5rem;
    user-select: none;
    box-shadow: 0 0 0 2px ${props => props.theme.grey};
    cursor: pointer;
  }
`