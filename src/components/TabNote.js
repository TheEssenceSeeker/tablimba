import React from 'react'

const TabNote = ({filled = false, isHighlighted, note, editNote, index}) =>
    (
        <div
            className={`tabkey${isHighlighted ? ' highlighted' : ''}`}
            onClick={() => editNote(index, note)}
        >
            {
                filled && <div className={'tabkey filled'}></div>
            }
        </div>
    )

export default TabNote