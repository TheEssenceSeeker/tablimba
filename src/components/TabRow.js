import React from 'react'
import TabNote from "./TabNote";

const TabRow = ({note, tuning, highlightedNotes, editNote, index, deleteRow}) => {

    return (
        <div className="kalimba-row tab-row">
            <i className="fas fa-times-circle fa-lg" onClick={() => deleteRow(index)}></i>
            {
                tuning.map((tNote, i) => (
                    <TabNote filled={tNote === note}
                             key={i}
                             isHighlighted={highlightedNotes.includes(tNote)}
                             editNote={editNote}
                             note={tNote}
                             index={index}
                    />
                    ))
            }
        </div>
    )
}
export default TabRow