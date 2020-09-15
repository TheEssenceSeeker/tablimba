import React from 'react'
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

const SelectKeyNumber = ({value, onChange}) => {
    const renderOptions = () => {
        let options = []
        for(let i = 3; i <= 17; i++) {
            options.push(<option value={i} key={i}>{i}</option>)
        }
        return options
    }
    return (
        <Select value={value} onChange={onChange}>
            {
                renderOptions()
            }
        </Select>
    )
}

export default SelectKeyNumber
