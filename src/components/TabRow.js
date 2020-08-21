import React, {useState} from 'react'
import TabNote from "./TabNote";

const TabRow = ({note, tuning, highlightedNotes}) => {

    return (
        <div className="kalimba-row tab-row">
            {
                tuning.map((tNote, i) => (
                    <TabNote filled={tNote === note}
                             key={i}
                             isHighlighted={highlightedNotes.includes(tNote)}
                    />
                    ))
            }
        </div>
    )
}
export default TabRow