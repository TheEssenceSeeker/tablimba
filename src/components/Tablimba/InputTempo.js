import React from 'react'
import styled from 'styled-components'
import Input from "../Lib/Input"


const InputTempoContainer = styled.div`
  position:relative;
  
  ${Input} {
    padding-left: 10px;
    width: 3.5em;
    text-align: right;
    
    &:focus {
      box-shadow: 0 0 0 2px ${props => props.theme.black};
    }
  }

  &:after {
    content: '𝅘𝅥=';
    position: absolute;
    left: 7px;
    top: 0.3rem;
    //font-size: 15px;
    color: ${props => props.theme.grey};
    pointer-events: none;
    z-index: 1;
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