import React from 'react'
import TabRow from "../TabRow/"
import {parseNote, sumDurations} from '../../misc/tabHandling'
import * as Tone from "tone"
import TabBar from "../TabBar/"
import Container from "../Lib/Container"
import styled from 'styled-components'
import TabContainer from "./TabContainer";

const Tab = props => {
    const {tab, tuning, highlightedNotes, editNote, deleteRow, insertRow, playFromPos} = props
    let prevNoteBarNumber = 0
    let currentTime = Tone.Time(0)

    const renderTab = () => {
        let bars = []
        let currentBarRows = []

        tab.forEach((strNote, i) => {
            let hasError = false

            const note = parseNote(strNote)
            currentTime = sumDurations(currentTime.toBarsBeatsSixteenths(), note.duration)
            const [barNumber, quarters, sixteenths] = currentTime.toBarsBeatsSixteenths().split(':').map(item => +item)

            currentBarRows.push(<TabRow key={i}
                                        note={note}
                                        tuning={tuning}
                                        highlightedNotes={highlightedNotes}
                                        editNote={editNote}
                                        index={i}
                                        deleteRow={deleteRow}
                                        insertRow={insertRow}
                                        hasBarError={hasError}
                                        playFromPos={playFromPos}/>)

            if (barNumber !== prevNoteBarNumber || i === tab.length - 1) {
                hasError = quarters !== 0 || sixteenths !== 0 || barNumber > prevNoteBarNumber + 1
                bars.push(
                    <TabBar key={prevNoteBarNumber} number={prevNoteBarNumber + 1} hasError={hasError}>
                        {currentBarRows}
                    </TabBar>
                )
                currentBarRows = []
                currentTime = Tone.Time(`${barNumber}:0:0`)
            }
            prevNoteBarNumber = barNumber

        })
        prevNoteBarNumber = 0
        return bars
    }

    return <TabContainer>{renderTab()}</TabContainer>

}

export default Tab