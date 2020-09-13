import React from 'react'
import {RadioCheckboxContainer} from "../styled"
import styled from 'styled-components'

const RadioButton = styled.div`
  border-radius: 50%;
`

const Radio = ({name, value, text, checked, onChange, title}) => {
    return (
        <RadioCheckboxContainer title={title}>
            <label>
                <input type="radio" name={name} value={value} checked={checked} onChange={onChange} />
                <RadioButton>{text}</RadioButton>
            </label>
        </RadioCheckboxContainer>
    )
}

export default Radio