import React from 'react'

const TabNote = ({filled = false, isHighlighted, note, editNote, index, pitch}) =>
    (
        <div
            className={`tabkey${isHighlighted ? ' highlighted' : ''}`}
            onClick={() => editNote(index, pitch)}
        >
            {
                filled && <div className={'tabkey filled'}>{note.duration}</div>
            }
        </div>
    )

export default TabNote