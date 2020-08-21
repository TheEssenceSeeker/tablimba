import React, {useState} from 'react'

const Key = props => {
    const {note, height, onPlayNote, isHighlighted, onRtClick} = props

    return (
        <div className={`key${isHighlighted ? ' highlighted' : ''}`}
             onClick={() => onPlayNote(note)}
             onContextMenu={(e) =>
             {
                 e.preventDefault()
                 onRtClick(note)
             }}
             style={{height: height}}
        >
            {note}
        </div>
    )
}
export default Key
