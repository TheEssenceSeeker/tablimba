import React from 'react'
import TabNote from "./TabNote";

const TabRow = ({note, tuning}) => {
    const onRtClk = e => {
        e.preventDefault()
        console.log('rtclk')
    }

    return (
        <div className="kalimba-row" onContextMenu={onRtClk}>
            {
                tuning.map((tNote, i) => <TabNote filled={tNote === note} key={i} />)
            }
        </div>
    )
}
export default TabRow