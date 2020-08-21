import React, {useState} from 'react'

const Key = props => {
    const {note, height, onPlayNote} = props
    const [isHighlighted, setIsHighlighted] = useState(false)

    return (
        <div className={`key${isHighlighted ? ' highlighted' : ''}`}
             onClick={() => onPlayNote(note)}
             onContextMenu={(e) =>
             {
                 e.preventDefault()
                 setIsHighlighted(prevState => !prevState)
             }}
             style={{height: height}}
        >
            {note}
        </div>
    )
}
export default Key
