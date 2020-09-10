import React from 'react'
import styled from 'styled-components'

const EditableSpan = styled.span`
  height: 25px;
  padding: 0 5px;
  
  &:focus {
      outline: none;
      background: #fff;
      border-radius: 3px;
      box-shadow: 0 0 0 2px gray;
  }
  
  &:hover + .tab-title__edit-icon {
    color: #000;
  }
`

export default EditableSpan