import React from 'react'
import TabRow from "./TabRow"

const Tab = props => {
    const {tab, tuning, highlightedNotes, editNote, deleteRow} = props
    return (
        <div className='tab'>
            {
                tab.map((tNote, i) => <TabRow note={tNote}
                                              tuning={tuning}
                                              key={i}
                                              highlightedNotes={highlightedNotes}
                                              editNote={editNote}
                                              index={i}
                                              deleteRow={deleteRow}
                />).reverse()
            }
        </div>
    )
}

export default Tab