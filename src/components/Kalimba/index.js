import React from 'react'
import Key from "./Key";
import Container from "../Lib/Container";

const Kalimba = props => {
    const {tuning, onPlayNote, highlightedNotes, onKeyRtClick, minimized = true} = props

    const renderKeys = (tuning, heightStep) => {
        let deltaH = 0
        let keysArray = []
        tuning.forEach((key, i) => {
            deltaH = (i <= Math.floor(tuning.length / 2)) ? deltaH + heightStep : deltaH - heightStep
            if (i === Math.floor(tuning.length / 2)) deltaH -= heightStep / 2
            keysArray.push(<Key note={key}
                                key={i}
                                deltaH={deltaH}
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
                renderKeys(tuning,minimized ? 0.1 : 20)
            }
        </Container>
    )
}

export default Kalimba