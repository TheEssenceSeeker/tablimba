import React from 'react'
import {RadioCheckboxContainer} from "./styled"
import styled from 'styled-components'

const RadioContainer = styled(RadioCheckboxContainer)`
  div {
    border-radius: 50%;
  }
`

const Radio = ({name, value, text, checked, onChange, title}) => {
    return (
        <RadioContainer title={title}>
            <label>
                <input type="radio" name={name} value={value} checked={checked} onChange={onChange} />
                <div>{text}</div>
            </label>
        </RadioContainer>
    )
}

export default Radio