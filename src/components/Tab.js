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
                    const note = parseNote(strNote)
                    currentTime = sumDurations(currentTime.toBarsBeatsSixteenths(), note.duration)
                    const barNumber = +currentTime.toBarsBeatsSixteenths().split(':')[0]
                    console.log(barNumber, prevNoteBarNumber)
                    if (barNumber !== prevNoteBarNumber) {
                        hasBarLine = true
                        prevNoteBarNumber = barNumber
                    }

                    return (
                        <div key={`wrapper-${i}`}>
                            <TabRow note={note}
                                    tuning={tuning}
                                    highlightedNotes={highlightedNotes}
                                    editNote={editNote}
                                    index={i}
                                    deleteRow={deleteRow}
                                    insertRow={insertRow}
                            />
                            {
                                hasBarLine && <TabBarLine number={barNumber}/>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Tab