import React from 'react'
import styled from 'styled-components'
import {RadioCheckboxContainer} from "./styled"

const CheckboxContainer = styled(RadioCheckboxContainer)`
  div {
    border-radius: 3px;
  }
`

const Checkbox = ({text, isChecked, onChange}) => {
    return (
        <CheckboxContainer>
            <label>
                <input type='checkbox' checked={isChecked} onChange={onChange}/>
                <div>{text}</div>
            </label>
        </CheckboxContainer>
    )
}

export default Checkbox