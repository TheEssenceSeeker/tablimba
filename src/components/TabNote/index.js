import React from 'react'
import {noteSymbols, restSymbols} from '../../misc/tabHandling'
import styled from 'styled-components'

const TabNoteContainer = styled.div`
  display: inline-flex;
  flex: 1 0;  
  //height: 25px;
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

const Note = styled.div`
  font-size: 20px;
`

const TabNote = ({filled = false, isHighlighted, note, editNote, index, pitch, className}) =>
    (
        <TabNoteContainer className={className} isHighlighted={isHighlighted} onClick={() => editNote(index, pitch)}>
            {
                filled && <Note>{note.pitch === '' ? restSymbols[note.duration] : noteSymbols[note.duration]}</Note>
            }
        </TabNoteContainer>
    )

export default TabNote