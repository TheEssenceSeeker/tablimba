import React from 'react'

const Key = props => {
    const {note, height, onPlayNote, isHighlighted, onKeyRtClick, index} = props

    return (
        <div className={`key${isHighlighted ? ' highlighted' : ''}`}
             onClick={() => onPlayNote(note)}
             onContextMenu={(e) =>
             {
                 e.preventDefault()
                 onKeyRtClick(index)
             }}
             style={{height: height}}
        >
            {note}
        </div>
    )
}
export default Key
