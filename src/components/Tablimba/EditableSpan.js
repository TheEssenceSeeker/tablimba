import styled from 'styled-components'

const EditableSpan = styled.span`  
  padding: 0.3rem 5px 0 5px;
  font-size: inherit;
  
  &:focus {
      outline: none;
      background: #fff;
      border-radius: 3px;
      box-shadow: 0 0 0 2px gray;
  }
  
  &:hover + .tab-title__edit-icon,
  & + .tab-title__edit-icon:hover {
    color: #000;
  }
  
  & + .tab-title__edit-icon {
    margin-left: 3px;
    font-size: 0.9em;
    color: gray;
    cursor: pointer;
  }
`

export default EditableSpan