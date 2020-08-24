import React from 'react'
import {parseNote} from "../misc/tabHandling"

const TabNote = ({filled = false, isHighlighted, note, editNote, index}) =>
    (
        <div
            className={`tabkey${isHighlighted ? ' highlighted' : ''}`}
            // onClick={() => editNote(index, parseNote(note)}
        >
            {
                filled && <div className={'tabkey filled'}>{parseNote(note).duration}</div>
            }
        </div>
    )

export default TabNote