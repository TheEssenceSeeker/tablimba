import React from 'react'
import TabRow from "./TabRow"

const Tab = props => {
    const {tab, tuning, highlightedNotes, editNote, deleteRow, insertRow} = props
    return (
        <div className='tab'>
            {
                tab.map((note, i) => <TabRow note={note}
                                             tuning={tuning}
                                             highlightedNotes={highlightedNotes}
                                             editNote={editNote}
                                             index={i}
                                             deleteRow={deleteRow}
                                             insertRow={insertRow}
                                             key={i}
                />)
            }
        </div>
    )
}

export default Tab