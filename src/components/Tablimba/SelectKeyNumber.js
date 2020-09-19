import React from 'react'
import Select from "../Lib/Select"
// import styled from 'styled-components'

// const SelectContainer = styled.div`
  //position:relative;
  //&:before {
  //  position:absolute;
  //  content: '🎹';
  //  top: 45%;
  //  transform: translateY(-50%);
  //  left: 4px;
  //  pointer-events: none;
  //}
// `

// const SelectKey = styled(Select)`
  //width: 3.7rem;
  //padding-left: 1.2rem;
  //
  //&:focus {
  //  padding-left: 1.5rem;
  //  text-align: right;  
  //}
// `

const SelectKeyNumber = ({value, onChange}) => {
    const renderOptions = () => {
        let options = []
        for(let i = 7; i <= 17; i++) {
            options.push(<option value={i} key={i}>{i}</option>)
        }
        return options
    }
    return (
        // <SelectContainer>
            <Select value={value} onChange={onChange}>
                {
                    renderOptions()
                }
            </Select>
        // </SelectContainer>
    )
}

export default SelectKeyNumber
