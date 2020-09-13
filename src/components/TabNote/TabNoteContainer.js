import styled from 'styled-components'

const TabNoteContainer = styled.div`
  display: inline-flex;
  flex: 1 0;  
  border-right: 1px solid #000;
  border-left: 1px solid #000;
  background-color: ${p => p.isHighlighted ? p.theme.highlight : 'inherit'};
  color: #000;
  justify-content: center;
  user-select: none;
  cursor:pointer;

  &::before {
    content:'';
    float:left;
    padding-top: 100%;
  }
`

export default TabNoteContainer