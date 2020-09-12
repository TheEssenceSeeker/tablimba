import React from 'react'
import Key from "./Key";
import Container from "../Lib/Container";

const Kalimba = props => {
    const {tuning, onPlayNote, highlightedNotes, onKeyRtClick, minimized = true} = props

    const renderKeys = (tuning, minH, heightStep) => {
        let height = minH
        let keysArray = []
        tuning.forEach((key, i) => {
            height = (i <= Math.floor(tuning.length / 2)) ? height + heightStep : height - heightStep
            if (i === Math.floor(tuning.length / 2)) height -= heightStep / 2
            keysArray.push(<Key note={key}
                                key={i}
                                height={height}
                                onPlayNote={onPlayNote}
                                isHighlighted={highlightedNotes.includes(i)}
                                onKeyRtClick={onKeyRtClick}
                                index={i}
            />)
        })
        return keysArray
    }

    return (
        <Container>
            {
                renderKeys(tuning, minimized ? 30 : 40, minimized ? 2 : 20)
            }
        </Container>
    )
}

export default Kalimba