import React from 'react'
import {noteSymbols, restSymbols} from '../../misc/tabHandling'
import TabNoteContainer from "./TabNoteContainer"
import Note from "./Note"

const TabNote = ({filled = false, isHighlighted, note, editNote, index, pitch, className}) =>
    (
        <TabNoteContainer className={className} isHighlighted={isHighlighted} onClick={() => editNote(index, pitch)}>
            {
                filled && <Note>{note.pitch === '' ? restSymbols[note.duration] : noteSymbols[note.duration]}</Note>
            }
        </TabNoteContainer>
    )

export default TabNote