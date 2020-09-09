import React from 'react'
import styled from 'styled-components'

const CheckboxContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  
  &:last-child {
  margin-right: 0;
  }
  
  input {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    position: absolute;
    &:checked + div {
        background-color: deepskyblue;
        box-shadow: 0 0 0 2px #000;
    }
    &:not(:checked) + div:hover {
      box-shadow: 0 0 0 2px #000;
    }
  }
`

const CheckboxBtn = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 25px;
  background-color: white;
  font-size: 20px;
  user-select: none;
  box-shadow: 0 0 0 2px gray;
  cursor: pointer;
  
  border-radius: 3px;
`

const Checkbox = ({text, isChecked, onChange}) => {
    return (
        <CheckboxContainer>
            <label>
                <input type='checkbox' checked={isChecked} onChange={onChange}/>
                <CheckboxBtn>{text}</CheckboxBtn>
            </label>
        </CheckboxContainer>
    )
}

export default Checkbox