import React, {useContext} from 'react'
import Key from "./Key"
import {TuningContext} from "../../contexts/tuningContext"
import DynamicTablimbaContainer from "../Lib/DynamicTablimbaContainer"

const Kalimba = props => {
    const {onPlayNote, highlightedNotes, onKeyRtClick, minimized = true, className} = props

    const {tuning} = useContext(TuningContext)

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
        <DynamicTablimbaContainer className={className}>
            {
                renderKeys(tuning,minimized ? 0.1 : 20)
            }
        </DynamicTablimbaContainer>
    )
}

export default Kalimba