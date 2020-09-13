import styled from 'styled-components'
import RowFloatingButton from "./FloatingButtons"

const TabRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  background-color: inherit;
  
  &:hover{
    background-color: ${p => p.theme.accent};
    transition: background-color .25s ease;
  }
  
  &:hover ${RowFloatingButton} {
    opacity: 1;
  }
`

export default TabRowContainer