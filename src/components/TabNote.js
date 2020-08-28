import React from 'react'
import {noteSymbols, restSymbols} from '../misc/tabHandling'

const TabNote = ({filled = false, isHighlighted, note, editNote, index, pitch}) =>
    (
        <div
            className={`tabkey${isHighlighted ? ' highlighted' : ''}`}
            onClick={() => editNote(index, pitch)}
        >
            {
                // filled && <div className={`tabkey filled${note.pitch === '' ? ' rest' : ''}`}>{note.duration}</div>
                filled && <span className='note-symbol'>{note.pitch === '' ? restSymbols[note.duration] : noteSymbols[note.duration]}</span>
            }
        </div>
    )

export default TabNote