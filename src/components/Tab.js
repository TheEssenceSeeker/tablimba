import React from 'react'
import TabRow from "./TabRow"
import {parseNote, sumDurations} from '../misc/tabHandling'
import * as Tone from "tone"
import TabBar from "./TabBar"
import Container from "./Container"
import styled from 'styled-components'

const TabContainer = styled(Container)`
  padding-top: 150px;
  padding-bottom: 50px; 
  display:flex;
  flex-direction: column-reverse;
`

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

            // barSize = sumDurations(barSize, note.duration).toBarsBeatsSixteenths()
            // console.log('barsize', barSize)
            // console.log(barNumber, prevNoteBarNumber)

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