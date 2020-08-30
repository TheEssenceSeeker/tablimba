import React from 'react'
import TabRow from "./TabRow"
import {parseNote, sumDurations} from '../misc/tabHandling'
import * as Tone from "tone"
import TabBarLine from "./TabBarLine"

const Tab = props => {
    const {tab, tuning, highlightedNotes, editNote, deleteRow, insertRow} = props
    let prevNoteBarNumber = 0
    let currentTime = Tone.Time(0)

    return (
        <div className='tab'>
            {
                tab.map((strNote, i) => {
                    let hasBarLine = false
                    let hasError = false

                    const note = parseNote(strNote)
                    currentTime = sumDurations(currentTime.toBarsBeatsSixteenths(), note.duration)
                    const [barNumber, quarters, sixteenths] = currentTime.toBarsBeatsSixteenths().split(':').map(item => +item)
                    console.log(currentTime.toBarsBeatsSixteenths())
                    if (barNumber !== prevNoteBarNumber) {
                        hasBarLine = true
                        prevNoteBarNumber = barNumber
                        hasError = quarters !== 0 || sixteenths !== 0
                    }

                    return (
                        <div className='tab-row-container' key={i}>
                            {
                                hasBarLine && <TabBarLine number={barNumber} />
                            }
                            <TabRow note={note}
                                    tuning={tuning}
                                    highlightedNotes={highlightedNotes}
                                    editNote={editNote}
                                    index={i}
                                    deleteRow={deleteRow}
                                    insertRow={insertRow}
                                    hasBarError={hasError}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Tab