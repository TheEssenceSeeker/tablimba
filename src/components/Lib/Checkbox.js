import React from 'react'
import styled from 'styled-components'
import {RadioCheckboxContainer} from "../styled"

export const CheckboxButton = styled.div`
  border-radius: 3px;
`

const Checkbox = ({text, isChecked, onChange, title}) => {
    return (
        <RadioCheckboxContainer title={title}>
            <label>
                <input type='checkbox' checked={isChecked} onChange={onChange}/>
                <CheckboxButton>{text}</CheckboxButton>
            </label>
        </RadioCheckboxContainer>
    )
}

export default Checkbox