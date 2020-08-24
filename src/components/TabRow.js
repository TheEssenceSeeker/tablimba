import React from 'react'
import TabNote from "./TabNote";

const TabRow = ({note, tuning, highlightedNotes, editNote, index, deleteRow, insertRow}) => {

    return (
        <div className="kalimba-row tab-row">
            <i className="fas fa-times-circle fa-lg delBtn" onClick={() => deleteRow(index)}></i>
            <i className="fas fa-plus-circle fa-lg addBtn" onClick={() => insertRow(index)}></i>
            {
                tuning.map((tNote, i) => (
                    <TabNote filled={tNote === note.split('|')[0]}
                             note={tNote}
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