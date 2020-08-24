import React from 'react'

const TabNote = ({filled = false, isHighlighted, note, editNote, index, type}) =>
    (
        <div
            className={`tabkey${isHighlighted ? ' highlighted' : ''}`}
            onClick={() => editNote(index, note)}
        >
            {
                filled && <div className={`tabkey filled ${type}`}></div>
            }
        </div>
    )

export default TabNote