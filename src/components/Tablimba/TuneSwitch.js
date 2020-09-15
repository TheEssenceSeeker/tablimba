import React from 'react'
import styled, {css} from 'styled-components'
import Button from "../Lib/Button"

const TuneSwitch = styled(Button)`
  position:absolute;
  right: -2rem;
  top: 45%;
  transform: translateY(-50%) scaleX(-1);
  background-color: transparent;
  //border-radius: 50%;
  box-shadow: none;
  
  color: ${p => p.pressed ? p.theme.black : p.theme.grey};
  
  &:not(:disabled) {
    &:hover {
        box-shadow: none;
        border: none;
        outline: none;
        color: ${p => p.theme.black};
    }
    
    &:focus {
      background-color: transparent;
      box-shadow: none;
    }
  }
  
  @media(max-width: 940px) {
    display: none;
  }
`

export default TuneSwitch
