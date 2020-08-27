import React from 'react'
import TabNote from "./TabNote"
import {parseNote} from "../misc/tabHandling"

const TabRow = ({note, tuning, highlightedNotes, editNote, index, deleteRow, insertRow}) => {
    // TODO: Отображение пауз с длительностями
    const isFilled = (pitch, i) => note.pitch !== '' ? pitch === note.pitch : i === Math.floor(tuning.length / 2)

    return (
        <div className="kalimba-row tab-row">
            <i className="fas fa-times-circle fa-lg delBtn" onClick={() => deleteRow(index)}/>
            <i className="fas fa-plus-circle fa-lg addBtn" onClick={() => insertRow(index)}/>
            {
                tuning.map((pitch, i) => (
                    <TabNote filled={isFilled(pitch, i)}
                             note={note}
                             pitch={pitch}
                             key={i}
                             isHighlighted={highlightedNotes.includes(i)}
                             editNote={editNote}
                             index={index}
                    />
                    ))
            }
        </div>
    )
}
export default TabRow