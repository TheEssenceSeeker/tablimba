import React from 'react'
import TabRow from "./TabRow"
import {parseNote} from '../misc/tabHandling'

const Tab = props => {
    const {tab, tuning, highlightedNotes, editNote, deleteRow, insertRow} = props
    return (
        <div className='tab'>
            {
                tab.map((strNote, i) => <TabRow note={parseNote(strNote)}
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