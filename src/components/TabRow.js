import React from 'react'
import TabNote from "./TabNote";

const TabRow = ({note, tuning, highlightedNotes, editNote, index}) => {

    return (
        <div className="kalimba-row tab-row">
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