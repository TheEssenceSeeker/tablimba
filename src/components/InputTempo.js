import React from 'react'
import styled from 'styled-components'
import Input from "./Input"


const InputTempoContainer = styled.div`
  position:relative;
  
  &:focus {
    box-shadow: 0 0 0 2px grey,
                0 0 0 3px #000;
  }
  
  ${Input} {
    padding-left: 10px;
    width: 2.5em;
    text-align:right;
  }

  &:after {
    content: '𝅘𝅥=';
    position: absolute;
    left: 7px;
    top: 3px;
    font-size: 15px;
    color: gray;
    pointer-events: none;
    z-index: 2;
  }
`

const InputTempo = ({onChange, value, title}) => {
    return (
        <InputTempoContainer title={title}>
            <Input onChange={onChange} value={value} type='number'/>
        </InputTempoContainer>
    )
}

export default InputTempo