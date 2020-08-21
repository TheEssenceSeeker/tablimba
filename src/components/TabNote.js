import React from 'react'

const TabNote = ({filled = false, isHighlighted}) =>
    (
        <div className={`tabkey${isHighlighted ? ' highlighted' : ''}`}>
            {
                filled && <div className={'tabkey filled'}></div>
            }
        </div>
    )

export default TabNote