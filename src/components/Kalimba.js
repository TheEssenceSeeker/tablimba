import React from 'react'
import Key from "./Key";

const Kalimba = props => {
    const {tuning, onPlayNote, highlightedNotes, onKeyRtClick} = props

    const renderKeys = (tuning, minH, heightStep) => {
        let height = minH
        let keysArray = []
        tuning.forEach((key, i) => {
            height = (i <= Math.floor(tuning.length / 2)) ? height + heightStep : height - heightStep
            if (i === Math.floor(tuning.length / 2)) height -= heightStep / 2
            keysArray.push(<Key note={key}
                                key={i} height={height}
                                onPlayNote={onPlayNote}
                                isHighlighted={highlightedNotes.includes(i)}
                                onRtClick={onKeyRtClick}
            />)
        })
        return keysArray
    }

    return (
        <div className='kalimba-row'>
            {
                renderKeys(tuning, 20, 20)
            }
        </div>
    )
}

export default Kalimba